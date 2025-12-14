# Write your MySQL query statement below
SELECT *
FROM Users
WHERE REGEXP_LIKE(mail, "^[a-zA-Z]+[a-zA-Z0-9\\_\\.\\-]{0,}(@leetcode\\.com)$", 'c')
;