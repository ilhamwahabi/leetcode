# Write your MySQL query statement below
SELECT stock_name, SUM(capital_gain_loss) AS capital_gain_loss FROM ((
    SELECT stock_name, SUM(price) * -1 AS capital_gain_loss
    FROM Stocks
    WHERE operation = "Buy"
    GROUP BY stock_name
) UNION (
    SELECT stock_name, SUM(price) AS capital_gain_loss
    FROM Stocks
    WHERE operation = "Sell"
    GROUP BY stock_name
)) AS temp
GROUP BY stock_name
;