import csv
import json

csvfile = open('sample.csv', 'r')
jsonfile = open('output.json', 'w')

fieldnames = ("ID","FirstName","LastName","Age","Email","AccountNumber")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)