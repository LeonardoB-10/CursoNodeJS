USE RECURSOShUMANOS2

set statistics time on-- Estadisticas de tiempo
--INGRESO DE FORMA MASIVA DE 100.080 DATOS Jobs

BULK INSERT 
     Jobs
        FROM 'C:\bulkInsert\datos.csv'
        WITH (
            FIELDTERMINATOR = ',',-- separador de campos
            ROWTERMINATOR = '\n',-- separador de renglones
            FIRSTROW = 2,-- numero de renglon inicial
            MAXERRORS = 3,-- numero de errores
)
set statistics time off-- Estadisticas de tiempo



SELECT * FROM jobs