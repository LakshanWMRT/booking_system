import React,{Fragment,useState} from 'react'
import Message from './Message'
import axios from 'axios'
import Progress from './Progress'


const FileUpload = () => {
    
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0)
    
    const onChange = e => {
        //for single file
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)

        
    }
   
    const onSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("file",file)

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded* 100) / progressEvent.total)))
                    //clear percentage
                    setTimeout(() => setUploadPercentage(0), 1000)
                }
            })

            const { fileName, filePath } = res.data
            setUploadedFile({ fileName, filePath })

            setMessage('File Successfully Uploaded')
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was problem in Server')
            } else {
                setMessage(err.response.data.msg)
            }
        }
    }



    return (
        <Fragment>
            <div>
                <h1 align='center'>upload Bank Slip</h1>
                <br />
                <h2><img src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png" />Bank Slip</h2>
                <h2><img src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png" />You can Upload Photo</h2>
            </div>
            <h2>{message ? <Message msg={message} /> : null}

                <form onSubmit={onSubmit}>
                    <div className='custom-file mb-4'>
                        <input
                            type="file"
                            className='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                        />
                        <label className='custom-file-label' htmlFor='customFile'>{fileName}</label>
                    </div>
                    <Progress percentage={uploadPercentage} />
                    <input type='submit' value='upload' className='btn btn-primary bnt-block mt-4' />
                </form>
                {
                    uploadedFile ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <h3 className='text-center'>{uploadedFile.fileName}</h3>
                                <img src="../../signupbacknd/models/uploads/387325-white-tree-wallpaper-top-free-white-tree-background.jpg" width="100" height="100" alt='wada nh' /> 
                                <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                            </div>
                        </div>
                    ) : null
                }
            </h2>
        </Fragment>
    )
}
export default FileUpload
