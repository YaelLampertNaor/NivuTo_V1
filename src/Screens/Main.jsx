import React from 'react';
import { useState } from 'react';

export default function Main(props) {

  // const [courseCode, SetCourseCode] = useState(2);
  // const [courseName, setCourseName] = useState("הכנה לפרויקט גמר")
  // const [CourseDay, setCourseDay] = useState("א'");
  // const [CourseHour, setCourseHour] = useState("08:00 - 10:00");
  // const [Lecturer, setLecturer] = useState("אניטה אולמן")
  // const [LecturerTitle, setLecturerTitle] = useState("M.A");
  // const [courseLocation, setCourseLocation] = useState("נובל 6")

  return <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

      <h1 style={{marginTop:'180px', color:'black', fontFamily:'Redressed, cursive', fontSize:'5rem'}}>NivuTo</h1>
      <p style={{textAlign:'center', color:'white', width:'40%', borderStyle:'groove', padding:'50px'}}>רוב עולם אפליקציות הניווט מתעסק בניווט ברכב פרטי,
בתחבורה ציבורית, בערים ובכבישים, בעלי פונקציונאליות הקשורה לעומסי תנועה ועצירות מתוכננות בזמן נסיעה.
חלק מהאפליקציות הן בתשלום, ורובן דורשות חיבור זמין לאינטרנט.
לעומת זאת, ניווט בתוך מבנים וארגונים גדולים שם דגש על מציאת שירותים בסיסיים, הנגשת ידע רלוונטי למשתמש, חיסכון בזמן וארגון נכון של לוח הזמנים של המשתמש, התמצאות במרחב למשתמשים / מבקרים חדשים 
באופן אינטואיטיבי ונוח ללא היכרות מקדימה עם המרחב. 
</p>
    </div>;
  }

