export default function CreateEvent(){
    return(
        <div>
            <form action="http://localhost:5000/api/event/postEvents" method="POST" encType="multipart/form-data">
                <input type="text" name="eventName" placeholder="Event Name"/>
                <textarea type="text" name="description" placeholder="description"/>
                <input type="file" name="image" />
                <button type="submit">Submit</button>
            </form>
            <a href="/events">Back</a>
        </div>
    )
}