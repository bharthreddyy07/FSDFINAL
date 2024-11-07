// Course.jsx
import React from 'react';
import './course.css';
import { Link } from 'react-router-dom';

const Course = () => {
    // List of courses with URLs to redirect
    const courses = [
        { name: 'Introduction to Web Development', url: 'https://www.geeksforgeeks.org/web-development/' },
        { name: 'JavaScript for Beginners', url: 'https://www.geeksforgeeks.org/javascript/' },
        { name: 'Advanced CSS Techniques', url: 'https://www.geeksforgeeks.org/css/' },
        { name: 'Building RESTful APIs', url: 'https://www.geeksforgeeks.org/restful-api/' },
        { name: 'Machine Learning Basics', url: 'https://www.geeksforgeeks.org/machine-learning/' },
    ];

    return (
        <div className="courses-container">
            <h2>Available Courses</h2>
            <ul className="course-list">
                {courses.map((course, index) => (
                    <li key={index}>
                        {/* Open the link in a new tab */}
                        <a href={course.url} target="_blank" rel="noopener noreferrer" className="course-link">
                            {course.name}
                        </a>
                    </li>
                ))}
            </ul>
            <Link to="/home" className="nav-link">Back to Home</Link>
        </div>
    );
};

export default Course;
