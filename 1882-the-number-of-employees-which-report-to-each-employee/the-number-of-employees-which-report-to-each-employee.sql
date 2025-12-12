# Write your MySQL query statement below
WITH temp AS (
    SELECT reports_to, COUNT(reports_to) AS reports_count, ROUND(AVG(age)) AS average_age
    FROM Employees
    GROUP BY reports_to
)
SELECT employee_id, name, reports_count, average_age
FROM Employees E JOIN temp T
ON E.employee_id = T.reports_to
ORDER BY E.employee_id
;