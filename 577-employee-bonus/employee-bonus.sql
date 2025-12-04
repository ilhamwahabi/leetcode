# Write your MySQL query statement below
SELECT COALESCE(name, null) AS name, COALESCE(bonus, null) AS bonus
FROM Employee LEFT JOIN Bonus
ON Employee.empId = Bonus.empId
WHERE bonus < 1000 OR bonus IS null
;