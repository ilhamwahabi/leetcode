# Write your MySQL query statement below
SELECT book_id, title, author, genre, publication_year, current_borrowers
FROM (
    SELECT L.book_id, title, author, genre, publication_year, total_copies, COUNT(L.book_id) AS current_borrowers
    FROM library_books L JOIN borrowing_records B
    ON L.book_id = B.book_id
    WHERE return_date IS NULL
    GROUP BY L.book_id
    ORDER BY current_borrowers DESC, title ASC
) AS temp
WHERE total_copies - current_borrowers = 0
;