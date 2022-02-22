import React, { useState, useContext } from 'react'
import { Table } from 'react-bootstrap'
import { UserContext } from '../../Context/UserContext'

export default function Profile(props) {
    const {currentUser} = useContext(UserContext);

    const [sety1, setSety1] = useState([{
        day: `א'`,
        start: `08:00`,
        end: `10:00`,
        courseName: `Full Stack - React UI`,
        lecturer: `Nir Hen`
    },
    {
        day: `ב'`,
        start: `09:00`,
        end: `12:00`,
        courseName: `Javascript`,
        lecturer: `שי אברהם`
    },
    {
        day: `ה'`,
        start: `08:30`,
        end: `11:30`,
        courseName: `פייתון`,
        lecturer: `אניטה אולמן`
    },
    {
        day: `ו'`,
        start: `07:30`,
        end: `17:30`,
        courseName: `תרגול - ריאקט`,
        lecturer: `עמית שחל`
    }])




    return (
        <div className='container' style={{color:'white'}}>
            <img src="https://www.pngitem.com/pimgs/m/638-6381558_time-shift-software-flat-icon-student-girl-hd.png" style={{ blockSize: '190px', borderRadius: '100px', border: '1px solid black', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:'25px', marginBottom:'15px' }} class="img-thumbnail" alt="Add profile picture"></img>
            <p className='h6'>שלום {currentUser.firstName},</p>
            <br />
            <br />
            <div>
            <p className='h6'>מערכת השעות שלך:</p>
            <Table style={{width:`120%`, color:'white'}}>
                <thead>
                    <tr>
                        <th style={{ textAlign:'right', color:'white' }}>שיעור</th>
                        <th style={{ textAlign:'right', color:'white' }}>יום</th>
                        <th style={{ textAlign:'right', color:'white' }}>שעת התחלה</th>
                        <th style={{ textAlign:'right', color:'white' }}>שעת סיום</th>
                        <th style={{ textAlign:'right', color:'white' }}>מרצה</th>
                    </tr>
                </thead>
                <tbody>
                    {sety1.map((lesson, index) =>
                        <tr key={index}>
                            <td className='courseName' style={{ textAlign:'right', color:'white'}}>{lesson.courseName}</td>
                            <td style={{ textAlign:'right', color:'white' }} className='day'>{lesson.day}</td>
                            <td><span className='hour' style={{ textAlign:'right', color:'white'}}>{lesson.start}</span></td>
                            <td><span className='hour' style={{ textAlign:'right', color:'white' }}>{lesson.end}</span></td>
                            <td className='lecturer' style={{ textAlign:'right', color:'white' }}>{lesson.lecturer}<span className='title'>{props.title}</span></td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>



            
        </div>
    )
};
