# Write your MySQL query statement below
SELECT name FROM SalesPerson
WHERE name NOT IN (
    SELECT S.name AS name
    FROM SalesPerson S
    JOIN Orders O ON S.sales_id = O.sales_id
    JOIN Company C ON O.com_id = C.com_id
    WHERE C.name = "RED"
)
;