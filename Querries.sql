SELECT track.name, count(track.name) AS sales, genre.name FROM invoiceline
inner join invoice
on invoiceline.InvoiceId=invoice.InvoiceId
inner join track on track.trackid=invoiceline.trackid
inner join genre on track.genreid=genre.GenreId
group by track.name
order by sales desc;

select * from countries;

SELECT genre.genreid, genre.Name, AVG(bytes), COUNT(genre.genreid) as Amount
FROM invoiceline
INNER JOIN track
   	 ON track.trackid = invoiceline.trackid
INNER JOIN genre
   	 ON genre.genreid = track.genreid
GROUP BY genre.genreid
ORDER BY AVG(bytes) DESC;

SELECT customer.country, genre.name, COUNT(*) AS TotalSales
FROM customer
INNER JOIN invoice ON customer.customerid = invoice.customerid 
INNER JOIN invoiceline ON invoice.invoiceid = invoiceline.invoiceid
INNER JOIN track ON invoiceline.trackid = track.trackid 
INNER JOIN genre ON track.genreid = genre.genreid
inner join countries on track.GenreId=countries
where genre.name = "latin"
GROUP BY customer.country, genre.name
ORDER BY TotalSales DESC;

create view latin_songs as
select invoice.BillingCountry, count(t.name) as Sales
from invoiceline
Inner Join invoice on invoiceline.InvoiceId=invoice.InvoiceId
inner join track t on t.TrackId=invoiceline.TrackId
inner join genre g on g.genreId =t.GenreId
where g.name = "latin"
group by invoice.BillingCountry, g.name
order by Sales desc;

SELECT 
    a.billingcountry, 
    (b.sales / a.sales) * 100 as percentage
FROM 
    countries as a
JOIN 
    latin_songs as b
ON 
    a.billingcountry = b.billingcountry
order by percentage desc;




