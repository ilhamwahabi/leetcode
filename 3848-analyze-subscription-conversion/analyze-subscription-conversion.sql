# Write your MySQL query statement below
SELECT UA.user_id,
(SELECT ROUND(AVG(activity_duration), 2) FROM (SELECT activity_duration FROM UserActivity U WHERE U.user_id = UA.user_id AND activity_type = 'free_trial') AS free) AS trial_avg_duration,
(SELECT ROUND(AVG(activity_duration), 2) FROM (SELECT activity_duration FROM UserActivity U WHERE U.user_id = UA.user_id AND activity_type = 'paid') AS paid) AS paid_avg_duration
FROM UserActivity UA
GROUP BY user_id
HAVING paid_avg_duration IS NOT NULL
ORDER BY user_id
;