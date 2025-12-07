# Write your MySQL query statement below
DELETE 
FROM Person
WHERE id NOT IN (
    SELECT minId FROM (
        SELECT MIN(id) AS minId
        FROM Person
        GROUP BY email
    ) AS TEMP
)
;