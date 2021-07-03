# Write your MySQL query statement below
Select Max(Salary) As SecondHighestSalary from Employee Where salary < (Select Max(Salary) from Employee)