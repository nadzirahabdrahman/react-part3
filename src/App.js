import './App.css';

const App = () => {

  // let students = ["Jett", "Reyna", "Raze", "Neon"];

  function student(name, age, hostel, hostelRoom, city) {
    // 'this' is when use this function it will refer to 
    this.name = name;
    this.age = age;
    this.hostel = hostel;
    this.hostelRoom = hostelRoom;
    this.city = city;
  }

  let student1 = new student("Haziq", 23, true, 12, "Melaka");
  let student2 = new student("Nadzirah", 25, false, 0, "Pahang");

  let students = [student1, student2];

  return (
    <>
      {/* {students.map((val, key) => { */}
        {/* return ( */}
          {/* // key = index in the array
          // must have parents element div */}
          {/* <div key={key}> */}
            {/* val = value in the array */}
            {/* <h1>{val}</h1> */}
          {/* </div> */}
        {/* );
      })} */}

      {
        students.map((student, key) => {
          return (
            <div key={key} className='card'>
              <p>Name:{student.name}</p>
              <p>Age:{student.age}</p>
              <p>Live in hostel:{student.hostel ? "Yes" : "No"}</p>
              {student.hostel &&  <p>Room number:{student.hostelRoom}</p>}
              <p>City:{student.city}</p>
            </div>
          )
        })
      }
    </>
  )
  
}

export default App;
