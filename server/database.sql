--Create users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


--Create points Table 
CREATE TABLE points (
    id SERIAL PRIMARY KEY,
    LM_NAME TEXT,
    LAT DOUBLE PRECISION,
    LON DOUBLE PRECISION,
    Action TEXT
);

--Insert Data in points Table 
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 1, 'ท่าอากาศยานร้อยเอ็ด', 16.113478, 103.775964, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 2, 'ท่าอากาศยานนครราชสีมา', 14.950351, 102.312429, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 3, 'ท่าอากาศยานนานาชาติ ภูเก็ต', 8.111201, 98.314039, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 4, 'ท่าอากาศยานสุรินทร์ภักดี', 14.869499, 103.498876, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 5, 'ท่าอากาศยานขอนแก่น', 16.4655, 102.786, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 6, 'สนามบินรอบเมือง', 16.070716, 103.646364, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 7, 'ท่าอากาศยานนานาชาติ อุบลราชธานี', 15.251471, 104.868652, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 8, 'ท่าอากาศยานสงขลา', 7.186375, 100.607626, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 9, 'ท่าอากาศยานนานาชาติ สมุย', 9.54782, 100.062604, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 10, 'สนามบินโคกกระเทียม', 14.876763, 100.660795, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 11, 'ท่าอากาศยานตาก', 16.896691, 99.253707, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 12, 'สนามบินนครสวรรค์', 15.673286, 100.135622, '15')
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 13, 'ท่าอากาศยานเพชรบูรณ์', 16.674837, 101.194655, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 14, 'ท่าอากาศยานนราธิวาส', 6.51781, 101.741061, '15');
INSERT INTO points (id, LM_NAME, LAT, LON, ACTION) VALUES ( 15, 'ท่าอากาศยานนานาชาติอู่ ตะเภา พัทยา', 12.682946, 101.003405, '15');








