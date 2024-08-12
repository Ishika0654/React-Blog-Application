import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg"
        alt=""
      />
          <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input 
                    type="file" 
                    id="fileInput" 
                    style={{display:"none"}}
                />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea 
                placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
          </form>
    </div>
  )
}
