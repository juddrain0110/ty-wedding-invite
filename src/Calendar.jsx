// src/Calendar.jsx
import React from 'react';
import './Calendar.css';

import iconImage from './assets/image/icon.png';
import ringIcon from './assets/image/calendar_icon.png';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <img src={iconImage} alt="icon" className="calendar-icon" />
      <h2 className="calendar-title">WEDDING DAY</h2>

      <div className="calendar-date">
        <h1>11월 15일</h1>
        <p>토요일 오후 2시20분</p>
      </div>

      <div className="calendar-table">
        <div className="calendar-weekday">
          <span className="sun">SUN</span>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span className="sat">SAT</span>
        </div>

        <div className="calendar-days">
          {/* 1주차 */}
          <div className="week"><span className="sun"> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>1</span></div>
          {/* 2주차 */}
          <div className="week"><span className="sun">2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span className="sat">8</span></div>
          {/* 3주차 */}
          <div className="week">
            <span className="sun">9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span className="highlight">
              15
              <img src={ringIcon} alt="ring" className="ring-icon" />
            </span>
          </div>
          {/* 4주차 */}
          <div className="week"><span className="sun">16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span className="sat">22</span></div>
          {/* 5주차 */}
          <div className="week"><span className="sun">23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span className="sat">29</span></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
