# Write your MySQL query statement below
SELECT employee_id
FROM Employees E
WHERE manager_id IS NOT NULL
AND E.manager_id NOT IN (SELECT employee_id FROM Employees WHERE employee_id = E.manager_id)
AND salary < 30000
ORDER BY employee_id ASC
;