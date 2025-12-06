# Write your MySQL query statement below
WITH temp AS (
    SELECT *, COUNT(primary_flag) OVER (PARTITION BY employee_id) AS flag_count
    FROM Employee
)
SELECT employee_id, department_id
FROM temp
WHERE flag_count = 1 OR primary_flag = 'Y'
;