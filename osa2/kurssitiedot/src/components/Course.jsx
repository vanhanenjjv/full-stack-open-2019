import React from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total amount={course.parts.reduce((sum, p) => p.exercises + sum, 0)} />
  </div>
);

export default Course;
