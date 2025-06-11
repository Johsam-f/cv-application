import '../styles/output.css'

export default function OutputSection({
    name, lastName, email, tel, location = "Malawi", school, program, 
    compName, position, resp, startDate, endDate, descript
}){

    return(
        <div id="output-section">
            <header>
                <h2 className='h2'>{name + " " + lastName}</h2>
                <p><i className="fas fa-envelope"></i> {email} <i className="fas fa-phone"></i> {tel} <i className="fas fa-location"></i> {location}</p>
            </header>
            <main>
                <h3>Education</h3>
                <div>
                    <h4>{school}</h4>
                    <p>Has a degree in <b> {program}</b></p>
                </div>
                <h3>Professional Experience</h3>
                <div>
                    <h4>TITLE: <span>{compName}</span> </h4>
                    <p>
                        started working on <b>{startDate}</b> .worked as a/an {position} with 
                        a reposibility of <b>{resp} </b> and stopped working on <b>{endDate}.</b> 
                    </p>
                </div>
                <h3>About Self</h3>
                <p>{descript}</p>
            </main>
        </div>
    );
}