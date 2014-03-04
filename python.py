"""Special thanks to my buddy, Aiden Feay, for helping me figure out how to write pass 404s.
Also, I totally understand that this is among the least efficient ways for me to scrape these values. I'm so sorry."""

import urllib2
from bs4 import BeautifulSoup
import socket

f = open('census-indiana.txt', 'w')

for x in range(1800910,1886373):
	url = 'http://quickfacts.census.gov/qfd/states/18/' + str(x) + '.html'
	print "Getting data for " + str(x)
	print "Attempt!"

	try:
		page = urllib2.urlopen(url)
		soup = BeautifulSoup(page)
		tr = soup.find(attrs={'class','shaded1'})
		td = tr.findAll('td')[2].text
		h2 = soup.findAll('h2')[0].text
		print h2 + td
		f.write(h2 + ',' + td + '\n')
	except urllib2.HTTPError, e:
		print(e.code)
		if e.code == 404:
			pass
	except urllib2.URLError, e:
		print(e.args)
f.close()
