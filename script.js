const cities = [
      { name: "Agra", state: "Uttar Pradesh", famousSpot: "Taj Mahal", description: "Historical Mughal-era city famous worldwide for the Taj Mahal.", image: "https://imgs.search.brave.com/AA544wdn-0rd9eVb-yfKcu13NtBthUbge24E3ixfIEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NjA0ODczMy9waG90/by90YWotbWFoYWwt/bWF1c29sZXVtLWlu/LWFncmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTl0YjlK/SmZfTmNJem1iMWFi/UVJxaHk2SDBma240/QTJXVlVGY0hxSlY3/LWc9" },

{ name: "New Delhi", state: "Delhi", famousSpot: "India Gate", description: "Capital city of India known for heritage monuments and government institutions.", image: "https://imgs.search.brave.com/UnWrwOgJ6hvLAqrYkFGZ5n9YQyD-7mjtGMpJWdlgT4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/ODE2ODYyNi9waG90/by9pbWFnZS1vZi1h/bGwtaW5kaWEtd2Fy/LW1lbW9yaWFsLW5l/dy1kZWxoaS1pbmRp/YS1nYXRlLXN1cnJv/dW5kZWQtYnktaGF6/eS1za3ktcG9sbHV0/aW9uLWNyb3dkcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X3lFcVZCWDNFOUVz/MjlHZDUzNjcwM2ZT/dG9tMFhXUmxQNjNx/MkxRQXQ2OD0" },

{ name: "Mumbai", state: "Maharashtra", famousSpot: "Gateway of India", description: "India’s financial capital and home to Bollywood.", image: "https://imgs.search.brave.com/IhXxdST9XPS-e9hL1jIwrcFSP5gCwNfWqVpGshwDpjY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgx/MDA2MjQwL3Bob3Rv/L3RoZS1nYXRld2F5/LW9mLWluZGlhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Y/ZjMxd1dUMWIwRDhB/THM2UDhpT3J6UWpZ/Q2dnV1B5bF9EbGdr/TkpqdzY0PQ" },

{ name: "Bengaluru", state: "Karnataka", famousSpot: "Lalbagh Garden", description: "IT hub of India also known for pleasant weather and gardens.", image: "https://imgs.search.brave.com/LEc7FVek3BvGP7n9Hg5TA5kjYI2Pt9w4gO2G4Q42RYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ5LzQwLzM4/LzM2MF9GXzI0OTQw/MzgwMl91ZzZuSzY5/UVhBYVpUQ3AxUGhz/WU5vdmhGV1pvNWNm/cC5qcGc" },

{ name: "Hyderabad", state: "Telangana", famousSpot: "Charminar", description: "City of pearls known for Charminar and biryani.", image: "https://imgs.search.brave.com/UvqG82ynEDd213HmK-w-Gk57irh05VNHIcdkS5EG7ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9jaGFybWluYXIt/aHlkZXJhYmFkLXNl/Y3VuZGVyYWJhZC10/ZWxhbmdhbmEtbXVz/dGhlYWQtaGVybz9x/bHQ9ODImdHM9MTc0/MjE2NzU1NjMzNw" },

{ name: "Chennai", state: "Tamil Nadu", famousSpot: "Marina Beach", description: "Cultural and industrial center on the Bay of Bengal.", image: "https://imgs.search.brave.com/aLF3o4nILW-K5oQF87mT-VTdgCERb3ixuZqnkWkYDd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXJp/bmEtYmVhY2gtY2hl/bm5haS1jaXR5LXRh/bWlsLW5hZHUtaW5k/aWEtYmF5LWJlbmdh/bC1tYWRyYXMtdmll/dy1saWdodC1ob3Vz/ZS1tYXJpbmEtYmVh/Y2gtY2hlbm5haS1j/aXR5LXRhbWlsLW5h/ZHUtaW5kaWEtMTgy/OTExMTkzLmpwZw" },

{ name: "Kolkata", state: "West Bengal", famousSpot: "Howrah Bridge", description: "Cultural capital of India known for art, literature, and heritage.", image: "https://imgs.search.brave.com/tY2KbKD-riWOl7RFs0p-xSSuP-eoKW56B1j_MiwKSVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9icmlk/Z2UtaG93cmFoLWJy/aWRnZS1zdW5yaXNl/LTExNDExNDE3My5q/cGc" },

{ name: "Pune", state: "Maharashtra", famousSpot: "Shaniwar Wada", description: "Education hub with rich Maratha history.", image: "https://imgs.search.brave.com/dZq6R5NgwZwZ5Wp4BABiCS3vEeaNzIB_v4Hs1KVAO4U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oaXN0/b3JpY2FsLXNoYW5p/d2FyLXdhZGEtcGFs/YWNlLXB1bmUtbWFo/YXJhc3RyYS1pbmRp/YS1nYXJkZW4tc2hh/bml3YXJ3YWRhLWZv/cnRpZmljYXRpb24t/Y2l0eS1tYWhhcmFz/aHRyYS1idWlsdC0x/NjM5NjI5MzQuanBn" },

{ name: "Ahmedabad", state: "Gujarat", famousSpot: "Sabarmati Ashram", description: "Historic industrial city associated with Mahatma Gandhi.", image: "https://imgs.search.brave.com/F_SnNVAyIE1KoVbN0awk2RkQTlltTjNjESPkgN204wk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY4LzEz/LzNlLzY4MTMzZTFj/ZTVlNjA3YmNjZmRh/ZDQ3OTU5OTQ0NThj/LmpwZw" },

{ name: "Jaipur", state: "Rajasthan", famousSpot: "Hawa Mahal", description: "The Pink City known for royal palaces and forts.", image: "https://imgs.search.brave.com/5AzIfiISGlxmlNtPVRp4aRPbZeg0O5dZZUh-N4Q5gBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXdhLW1haGFs/LXBhbGFjZS1qYWlw/dXJfNzgzNjEtNDQ0/Ny5qcGc_c2VtdD1h/aXNfaW5jb21pbmcm/dz03NDAmcT04MA" },
{ name: "Surat", state: "Gujarat", famousSpot: "Dumas Beach", description: "Diamond polishing hub and fast-growing smart city.", image: "https://imgs.search.brave.com/2MPJ7VEXVfLP0PEvNoJlXNQe-QOcVKE8XksUI-R6-fc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXJh/dHRvdXJpc20uaW4v/aW1hZ2VzL3BsYWNl/cy10by12aXNpdC9o/ZWFkZXIvZ29waS10/YWxhdi1zdXJhdC10/b3VyaXNtLWVudHJ5/LWZlZS10aW1pbmdz/LWhvbGlkYXlzLXJl/dmlld3MtaGVhZGVy/LmpwZw" },
{ name: "Lucknow", state: "Uttar Pradesh", famousSpot: "Bara Imambara", description: "City of Nawabs known for culture, food, and heritage.", image: "https://imgs.search.brave.com/nAEvuNfQb1LYQTpYtboULCXX8yCSY9NiXwxQxex9F8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvbHVj/a25vdy9tbXQvYWN0/aXZpdGllcy9tX0Jh/cmElMjBJbWFtYmFy/YS01X2xfNDgwXzY0/MC5qcGc" },
{ name: "Kanpur", state: "Uttar Pradesh", famousSpot: "Bithoor", description: "Industrial city on the banks of the Ganga.", image: "https://imgs.search.brave.com/YJ5zlr59j6TRmO2u0GhbPDDvfLwA--ViFKrgu6Yvi2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9icmFtaGF2YXJ0/LWdoYXQtMS1rYW5w/dXItYXR0ci1oZXJv/P3FsdD04MiZ0cz0x/NzI2NjUwMTM1MjY5" },
{ name: "Nagpur", state: "Maharashtra", famousSpot: "Deekshabhoomi", description: "Orange city and geographical center of India.", image: "https://imgs.search.brave.com/pVIf01-NeiUupbRsGxOE32l4UZkNDVzoiaCqsBRXtdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NjI4ODgzOC9waG90/by9kZWVrc2hhYmhv/b21pLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1EV0NVZGtW/T2NjQzVBWEdianlB/U3FzVEZLY3Joemlq/M0Zrb215NjU5WUhJ/PQ" },

{ name: "Indore", state: "Madhya Pradesh", famousSpot: "Rajwada Palace", description: "Cleanest city in India known for food and heritage.", image: "https://imgs.search.brave.com/-mUUPBD3oHhD8iCVmqejYut6HQorM-SiXQfQC8UYVhc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDIvZTkvMTQvODYv/Z29tYXRnaXJpLmpw/Zw" },

{ name: "Bhopal", state: "Madhya Pradesh", famousSpot: "Upper Lake", description: "City of lakes with natural beauty and heritage.", image: "https://imgs.search.brave.com/eLzD7kjAeiTWCJNB_UH-0irLSESafrxbiZF8Swh4wGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iaG9w/YWwtY2l0eS1sYW5k/c2NhcGUtbW9zcXVl/LWNhcGl0YWwtdGFq/LXVsLW1hc2FqaWQt/bmVhci11cHBlci1s/YWtlLTIwMjcwNjc4/MS5qcGc" },

{ name: "Vadodara", state: "Gujarat", famousSpot: "Laxmi Vilas Palace", description: "Cultural city with rich royal history.", image: "https://imgs.search.brave.com/p-wa_prZzdH473OK5pkJYwYKtLNyQvLwW_tDUqo6724/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIy/NjcwMDM1NC9waG90/by92aXNpdG9ycy1n/YXRoZXItaW4tZnJv/bnQtb2YtdGhlLWxh/a3NobWktdmlsYXMt/cGFsYWNlLWF0LXZh/ZG9kYXJhLWluLWlu/ZGlhcy1ndWphcmF0/LXN0YXRlLW9uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/MTZIbmhoS0E3WG9s/VDM2WnJTMzh0QTVz/Q1RHM1BYMU90WWVB/QU45OUl3PQ" },
{ name: "Visakhapatnam", state: "Andhra Pradesh", famousSpot: "RK Beach", description: "Port city known for beaches and hills.", image: "https://imgs.search.brave.com/cI2mN-ttrY0PgeseV3z-tAnEZU_QsYSUqZ8F6ZmYcjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MjcwOTgyMS9waG90/by9wZW9wbGUtd2F0/Y2gtdGhlLWNpdHkt/c2t5bGluZS1mcm9t/LWthaWxhc2FnaXJp/LWhpbGxzLWluLXZp/c2FraGFwYXRuYW0t/b24tYXVndXN0LTI1/LTIwMjIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVlZR1dV/SVVwY21PWFItN3JO/Y0VBNHVrTTFKemo3/SjZDRkQ4bmhpUWp1/eDA9" },
{ name: "Varanasi", state: "Uttar Pradesh", famousSpot: "Kashi Vishwanath Temple", description: "One of the oldest living cities in the world.", image: "https://imgs.search.brave.com/Lfqv1L7k8dnozSQcYDWZh0AxmawP_tXQPiMk7rPA0bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFwc29maW5kaWEu/Y29tL2NpLW1vaS1p/bWFnZXMvbXktaW5k/aWEvL3ZhcmFuYXNp/LmpwZw" },
{ name: "Patna", state: "Bihar", famousSpot: "Golghar", description: "Ancient city on the Ganges with rich history.", image: "https://imgs.search.brave.com/H1hXjjJ8saLbO4LOlim34PAwc4uAZob1dJXhoD3bFHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzAxLzM2LzQx/LzM2MF9GXzYwMTM2/NDE0OV9pUmljSnZn/eEI5S25vZnd0djA3/Q3RRdTZzOG1SR0Vz/bS5qcGc" },
{ name: "Coimbatore", state: "Tamil Nadu", famousSpot: "Marudamalai Temple", description: "Major industrial city known for textiles and temples.", image: "https://imgs.search.brave.com/ICTpjt8Je7BNcVX1M8jaAXpmGoSIF1p44tq5n-7OUgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9yaXpvbmhlaWdo/dHMuaW4vaW1hZ2Vz/L21hcnV0aGFtYWxh/aS10ZW1wbGUud2Vi/cA" },
{ name: "Kochi", state: "Kerala", famousSpot: "Fort Kochi", description: "Beautiful port city with colonial influence.", image: "https://imgs.search.brave.com/CCcwYDGGsQFZ3CpzvcM9WvcLq7xjXYRTnNMvWsnRJLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZWlo/NDN5bTUzd2lmLmNs/b3VkZnJvbnQubmV0/L2tvY2hpLWluZGlh/LXN1bnNldC1zaHV0/dGVyc3RvY2tfMTA0/MTcxMTI5LmpwZ19l/YTZkMTUxODFkLmpw/Zw" },
{ name: "Thiruvananthapuram", state: "Kerala", famousSpot: "Padmanabhaswamy Temple", description: "Capital of Kerala known for cultural heritage.", image: "https://imgs.search.brave.com/_ZfjLyy32r-_O5zePdKyEF3DdWw7Pr91vT1tB80yZgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L1R2bWNlbnRy/YWwuanBn" },
{ name: "Ludhiana", state: "Punjab", famousSpot: "Punjab Agricultural University Museum", description: "Major industrial city famous for textiles.", image: "https://imgs.search.brave.com/Q0F8X1cKK0EVqNgbvHx9YWFvvgHJPMQP6xsjuo2mRig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzU2Lzk3Lzkz/LzM2MF9GXzE1NTY5/NzkzOTZfNGRVUXVH/elprZW9wWEJieHdE/cDBNUHJrcVFSWnhK/aTkuanBn" },
{ name: "Amritsar", state: "Punjab", famousSpot: "Golden Temple", description: "Spiritual city known for the Golden Temple.", image: "https://imgs.search.brave.com/E1mIUHWTIdW8vcf-mQMp0KqlHbudMEhQiZG2SpDEWeI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/MTEzNzQzL3Bob3Rv/L2dvbGRlbi10ZW1w/bGUtYW1yaXRzYXIt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9Rc0pP/a0lGRlA0LS05Rk0w/anFubXRCbVpmZlox/WUU1OUI1SU1xRm40/eFE9" },
{ name: "Jalandhar", state: "Punjab", famousSpot: "Devi Talab Mandir", description: "Historic city known for sports goods and temples.", image: "https://source.unsplash.com/800x600/?jalandhar" },
{ name: "Jammu", state: "Jammu & Kashmir", famousSpot: "Vaishno Devi", description: "Known as the city of temples and gateway to Kashmir.", image: "https://imgs.search.brave.com/xwiegY1WKlzBs5OkzkALdGxUqvnyzEgqitB8NnlB83c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/NTM3MTY4Ny9waG90/by90aGUtcGVyc29u/LWxvb2stYXQtc3Vu/c2V0LWFuZC1sZWgt/Y2l0eS1pbi1sZWgt/bGFkYWtoLWluZGlh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1qUjVyNlkzUWpz/QU02TWgzNTBfMkJj/ZTVqemZjWmZQRUNO/QTdsTjgzSW9BPQ" },
{ name: "Srinagar", state: "Jammu & Kashmir", famousSpot: "Dal Lake", description: "Paradise on Earth famous for lakes and houseboats.", image: "https://imgs.search.brave.com/YJHCEt19SMky1qmgGlxpaJJ908aJ0Npiyv87QWzgC0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA2LzkxLzE4/LzM2MF9GXzgwNjkx/MTg4M19VWGFJRlVY/UGRnd3M2emNPSHBw/Szhwd1FtbWtCNmV1/ay5qcGc" },
{ name: "Ranchi", state: "Jharkhand", famousSpot: "Rock Garden", description: "Capital city with beautiful waterfalls and greenery.", image: "https://imgs.search.brave.com/wP55VEA5boU0ZmAODV3OV8MK7VsCdtvM4sFOz7yxCV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYXRy/YXR1LXZhbGxleS1y/b2FkLXJhbmNoaS1q/aGFya2hhbmQtYmVh/dXRpZnVsLXNjZW5p/Yy1waG90b2dyYXBo/LWxvY2F0ZWQtbmVh/ci1zdGF0ZS0xNjkz/OTI2ODguanBn" },
{ name: "Jamshedpur", state: "Jharkhand", famousSpot: "Jubilee Park", description: "India’s first planned steel city.", image: "https://imgs.search.brave.com/LTC1QEd1Z_BrA5rQDnhVQw15egR_nsXLAFaoPIarfp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzIx/MTQ5NDYvcGhvdG8v/dG8tZ28td2l0aC1z/dG9yeS1pbmRpYS1l/Y29ub215LXRha2Vv/dmVycy1zdGVlbC1p/cy1wcm9jZXNzZWQt/YXQtaW5kaWFzLXRh/dGEtc3RlZWwtcGxh/bnQtaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUJUR2lu/Rm9CU1Y4Q3Qzd1B2/YXFGYkhVNUNTa1Jj/T1VBZE1BWnZ1ZW1G/TGs9" },
{ name: "Bhubaneswar", state: "Odisha", famousSpot: "Lingaraj Temple", description: "Temple city of India with ancient architecture.", image: "https://imgs.search.brave.com/LcLnRN89ylOkVeKCKaVkq3OIB0EKVCK2DpC9IabOvj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hdWRsZXl0cmF2/ZWwuY29tLy0vbWVk/aWEvaW1hZ2VzL2hv/bWUvaW5kaWFuLXN1/YmNvbnRpbmVudC9p/bmRpYS9wbGFjZXMv/aXN0b2NrOTQ0NTI2/Njk2X2JodWJhbmVz/d2FyX2luZGlhXzgw/MHgyNDAwLmpwZz9x/PTYwJnc9MTkyMCZo/PTY4NQ" },
{ name: "Cuttack", state: "Odisha", famousSpot: "Barabati Fort", description: "Former capital known for silver filigree work.", image: "https://source.unsplash.com/800x600/?cuttack" },
{ name: "Guwahati", state: "Assam", famousSpot: "Kamakhya Temple", description: "Gateway to Northeast India located on the Brahmaputra River.", image: "https://imgs.search.brave.com/eJsew6knNEutQYu6PRTL1JElfcxx_-xDBKwDNV-PsUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ndXdh/aGF0aS1jaXR5LWFz/c2FtLTEyMzI0NjUx/NC5qcGc" },
{ name: "Shillong", state: "Meghalaya", famousSpot: "Elephant Falls", description: "Scotland of the East known for waterfalls and hills.", image: "https://imgs.search.brave.com/81E0C8zUWUeyT4MYSTgBG1H36oXvN19W0eHfk79rX7o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjAz/NDY5NzQ4L3N0b2Nr/LXBob3RvLXJvYWQt/dW1pYW0tbGFrZS1z/aGlsbG9uZy1zdW1t/ZXI" },
{ name: "Imphal", state: "Manipur", famousSpot: "Kangla Fort", description: "Northeast city rich in culture and natural beauty.", image: "https://source.unsplash.com/800x600/?imphal" },
{ name: "Aizawl", state: "Mizoram", famousSpot: "Durtlang Hills", description: "Beautiful hill city surrounded by mountains.", image: "https://source.unsplash.com/800x600/?aizawl" },
{ name: "Kohima", state: "Nagaland", famousSpot: "War Cemetery", description: "Historic city known for Hornbill Festival and heritage.", image: "https://source.unsplash.com/800x600/?kohima" },
{ name: "Gangtok", state: "Sikkim", famousSpot: "MG Marg", description: "Clean hill capital with stunning Himalayan views.", image: "https://source.unsplash.com/800x600/?gangtok" },
{ name: "Itanagar", state: "Arunachal Pradesh", famousSpot: "Ita Fort", description: "Capital town surrounded by beautiful valleys.", image: "https://source.unsplash.com/800x600/?itanagar" },
{ name: "Panaji", state: "Goa", famousSpot: "Miramar Beach", description: "Laid-back capital known for Portuguese architecture.", image: "https://source.unsplash.com/800x600/?panaji" },
{ name: "Margao", state: "Goa", famousSpot: "Colva Beach", description: "Cultural hub of Goa known for beaches and heritage.", image: "https://source.unsplash.com/800x600/?colva-beach" },
{ name: "Mangalore", state: "Karnataka", famousSpot: "Panambur Beach", description: "Port city known for beaches and temples.", image: "https://imgs.search.brave.com/Gz9k8yWRv1nRfOyCskDiC3-_fXpnWmdA6lN-IZol6uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/NDY3NDU2L3Bob3Rv/L2xhZHktYW5kLXRo/ZS1nb2QuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9jSEVY/ampVS2c0SUQ2S3Uz/ck1McWFmTHF2OXEy/SElFTDROZ0RPdzhI/NnM9" },
{ name: "Mysuru", state: "Karnataka", famousSpot: "Mysore Palace", description: "Royal city known for palaces and tradition.", image: "https://imgs.search.brave.com/LVbq1YPjtqwqUkLJ4yAl-hutb30KawVzbpSZCswDbBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NTAzOTU4NS9waG90/by9teXNvcmUtcGFs/YWNlLW15c3VydS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c0ZmYmdHSFROV1Z1/RFJIb3ZFd0FMa1pu/aXhnTGJmWnFNOS0w/OGdrYVRacz0" },
{ name: "Hubli", state: "Karnataka", famousSpot: "Unkal Lake", description: "Commercial hub of North Karnataka.", image: "https://source.unsplash.com/800x600/?hubli" },
{ name: "Belagavi", state: "Karnataka", famousSpot: "Belgaum Fort", description: "Historic city with forts and pleasant climate.", image: "https://source.unsplash.com/800x600/?belgaum" },
{ name: "Tiruchirappalli", state: "Tamil Nadu", famousSpot: "Rockfort Temple", description: "Historic city on the Kaveri River.", image: "https://source.unsplash.com/800x600/?trichy" },
{ name: "Madurai", state: "Tamil Nadu", famousSpot: "Meenakshi Temple", description: "Temple city with ancient Dravidian architecture.", image: "https://source.unsplash.com/800x600/?meenakshi-temple" },
{ name: "Salem", state: "Tamil Nadu", famousSpot: "Yercaud Hills", description: "Industrial city surrounded by hills.", image: "https://source.unsplash.com/800x600/?salem" },
{ name: "Tirunelveli", state: "Tamil Nadu", famousSpot: "Nellaiappar Temple", description: "Historic temple city known for Halwa.", image: "https://source.unsplash.com/800x600/?tirunelveli" },
{ name: "Nagercoil", state: "Tamil Nadu", famousSpot: "Suchindram Temple", description: "Scenic city near Kanyakumari.", image: "https://source.unsplash.com/800x600/?nagercoil" },
{ name: "Coimbatore", state: "Tamil Nadu", famousSpot: "Marudamalai Temple", description: "Manchester of South India known for industry and education.", image: "https://source.unsplash.com/800x600/?coimbatore" },
{ name: "Erode", state: "Tamil Nadu", famousSpot: "Bhavani Sangameshwarar Temple", description: "Textile city known for turmeric trading.", image: "https://source.unsplash.com/800x600/?erode" },
{ name: "Vellore", state: "Tamil Nadu", famousSpot: "Vellore Fort", description: "Historic city known for CMC and ancient fort.", image: "https://source.unsplash.com/800x600/?vellore" },
{ name: "Warangal", state: "Telangana", famousSpot: "Warangal Fort", description: "Historic city with Kakatiya architecture.", image: "https://source.unsplash.com/800x600/?warangal" },
{ name: "Nizamabad", state: "Telangana", famousSpot: "Nizamabad Fort", description: "Historic town known for temples and lakes.", image: "https://source.unsplash.com/800x600/?nizamabad" },
{ name: "Khammam", state: "Telangana", famousSpot: "Khammam Fort", description: "City with ancient architecture and hot springs.", image: "https://source.unsplash.com/800x600/?khammam" },
{ name: "Vijayawada", state: "Andhra Pradesh", famousSpot: "Kanaka Durga Temple", description: "Major commercial city on the banks of Krishna River.", image: "https://source.unsplash.com/800x600/?vijayawada" },
{ name: "Visakhapatnam", state: "Andhra Pradesh", famousSpot: "RK Beach", description: "Port city known for beaches and naval base.", image: "https://imgs.search.brave.com/gfcPioIafC8eshtHUcrXW959cQXmB53xy23bryI2B08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yYW1h/a3Jpc2huYS1iZWFj/aC12aXNoYWtoYXBh/dG5hbS1mZWJydWFy/eS1hbmRocmEtcHJh/ZGVzaC1pbmRpYS1w/b3B1bGFyLXBsYWNl/LXZhY2F0aW9ucy00/MTYzNzcxNS5qcGc" },
{ name: "Guntur", state: "Andhra Pradesh", famousSpot: "Amaravati Stupa", description: "Agricultural trade center and historical region.", image: "https://source.unsplash.com/800x600/?guntur" },
{ name: "Nellore", state: "Andhra Pradesh", famousSpot: "Penchalakona Temple", description: "City known for agriculture and seafood.", image: "https://source.unsplash.com/800x600/?nellore" },

{ name: "Kurnool", state: "Andhra Pradesh", famousSpot: "Konda Reddy Fort", description: "Gateway to Rayalaseema with historical significance.", image: "https://source.unsplash.com/800x600/?kurnool" },
{ name: "Rajahmundry", state: "Andhra Pradesh", famousSpot: "Godavari Bridge", description: "Cultural capital of Andhra Pradesh located on the Godavari.", image: "https://source.unsplash.com/800x600/?rajahmundry" },
{ name: "Tirupati", state: "Andhra Pradesh", famousSpot: "Tirumala Temple", description: "One of the most visited pilgrimage sites in the world.", image: "https://imgs.search.brave.com/dNEtFUw5dZNPxMYo1mfof69Ga5v9XHzLcyYREphV0Rw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdGly/dXBhdGktYmFsYWpp/LXRlbXBsZS1jb21w/b3VuZC01dDFkNGNl/ejVubHM4cHRkLmpw/Zw" },
{ name: "Kozhikode", state: "Kerala", famousSpot: "Kappad Beach", description: "Historic spice trade city.", image: "https://source.unsplash.com/800x600/?kozhikode" },
{ name: "Kochi", state: "Kerala", famousSpot: "Fort Kochi", description: "Port city known for heritage and backwaters.", image: "https://imgs.search.brave.com/NodrZHRUTQoJ_GC7_7AMsXrI0E24WeTVepyX1tQPu1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MTM1NDIxNS9waG90/by9zdHJlZXQtc2Nl/bmUtd2l0aC1pbmRp/YW4td29tYW4taW4t/ZnJvbnQtb2YteWVs/bG93LWhvdXNlLWZv/cnQta29jaGktY29j/aGluLWtlcmFsYS1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S21jQWZJ/UFkyVkc0azQ0bzdN/MGNBNUdaTWx1aE5W/THprWk0zdnFJblcy/Zz0" },
{ name: "Kannur", state: "Kerala", famousSpot: "St. Angelo Fort", description: "Historic coastal city with Theyyam tradition.", image: "https://source.unsplash.com/800x600/?kannur" },
{ name: "Alappuzha", state: "Kerala", famousSpot: "Backwaters", description: "Venice of the East known for houseboats.", image: "https://source.unsplash.com/800x600/?alappuzha" },
{ name: "Palakkad", state: "Kerala", famousSpot: "Palakkad Fort", description: "Gateway to Kerala known for lush greenery.", image: "https://source.unsplash.com/800x600/?palakkad" },

{ name: "Bhopal", state: "Madhya Pradesh", famousSpot: "Upper Lake", description: "Lake city known for heritage and greenery.", image: "https://imgs.search.brave.com/eLzD7kjAeiTWCJNB_UH-0irLSESafrxbiZF8Swh4wGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iaG9w/YWwtY2l0eS1sYW5k/c2NhcGUtbW9zcXVl/LWNhcGl0YWwtdGFq/LXVsLW1hc2FqaWQt/bmVhci11cHBlci1s/YWtlLTIwMjcwNjc4/MS5qcGc" },
{ name: "Indore", state: "Madhya Pradesh", famousSpot: "Rajwada Palace", description: "Cleanest city of India, known for food and culture.", image: "https://imgs.search.brave.com/8HVckc32KtYYi3km9lmtekUR3R7v10FZTdDhO--5xas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yYWp3YWRhLXBh/bGFjZS1pbmRvcmUt/aW1hZ2VzLWluZG9y/ZS1waWN0dXJlXzU5/MzE5NS0yMDcuanBn" },
{ name: "Jabalpur", state: "Madhya Pradesh", famousSpot: "Marble Rocks", description: "City known for waterfalls and white marble cliffs.", image: "https://source.unsplash.com/800x600/?jabalpur" },
{ name: "Gwalior", state: "Madhya Pradesh", famousSpot: "Gwalior Fort", description: "Historic city with majestic fort and palaces.", image: "https://imgs.search.brave.com/WrCQEh3KYlQtho_SxqXkNP_dg98rQkwTEkzRFheOZM0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hdWRsZXl0cmF2/ZWwuY29tLy0vbWVk/aWEvaW1hZ2VzL2hv/bWUvaW5kaWFuLXN1/YmNvbnRpbmVudC9p/bmRpYS9wbGFjZXMv/aXN0b2NrXzQ2MjY0/MDQ5OV9nd2FsaW9y/X2ZvcnRfODAweDI0/MDAuanBnP3E9NjAm/dz0xOTIwJmg9Njg1" },
{ name: "Ujjain", state: "Madhya Pradesh", famousSpot: "Mahakaleshwar Temple", description: "Ancient holy city known for Kumbh Mela.", image: "https://imgs.search.brave.com/aJ9f4-hg1LLAxs1zUib1cTRU1PoScjaKJlUDTtaDeZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91amph/aW4tbG9yZC1tYWhh/a2FsLXRlbXBsZS1j/b3JyaWRvci1hcmVh/LXByb2plY3QtcnVk/cmFzYWdhci12YXJp/b3VzLXJlbGlnaW91/cy1maWd1cmVzLWxh/a2UtMjQ5MTczNDk0/LmpwZw" },
{ name: "Rewa", state: "Madhya Pradesh", famousSpot: "Rewa Fort", description: "City known for white tigers and historical sites.", image: "https://source.unsplash.com/800x600/?rewa" },
{ name: "Satna", state: "Madhya Pradesh", famousSpot: "Maihar Temple", description: "Industrial city known for temples and cement hubs.", image: "https://source.unsplash.com/800x600/?satna" },
{ name: "Sagar", state: "Madhya Pradesh", famousSpot: "Lakha Banjara Lake", description: "Cultural and educational center.", image: "https://source.unsplash.com/800x600/?sagar" },
{ name: "Ratlam", state: "Madhya Pradesh", famousSpot: "Kalika Mata Temple", description: "Known for Ratlami Sev and cultural heritage.", image: "https://source.unsplash.com/800x600/?ratlam" },
{ name: "Dewas", state: "Madhya Pradesh", famousSpot: "Chamunda Tekri", description: "Industrial city with spiritual significance.", image: "https://source.unsplash.com/800x600/?dewas" },

{ name: "Nashik", state: "Maharashtra", famousSpot: "Trimbakeshwar Temple", description: "Wine capital of India with rich mythology.", image: "https://imgs.search.brave.com/e2MKZTGyi0AttDNNGkAMKvRV46z_YWtOZ0tUL6_a5cE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg4/MDQyMjM0L3Bob3Rv/L25hc2hpay1pbmRp/YS1odWdlLWdhdGhl/cmluZy1vZi1oaW5k/dS1kZXZvdGVlcy1h/cy10aGV5LXRha2Ut/YmF0aC1vbi1hdXNw/aWNpb3VzLWRheS1k/dXJpbmctdGhlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1w/clk1NDRob0JXZHJT/cUxPZTVhNWdnOU1X/Ykc3UGUxZk56cG9P/X3F6c1E4PQ" },
{ name: "Aurangabad", state: "Maharashtra", famousSpot: "Ajanta & Ellora Caves", description: "Historic city with UNESCO heritage.", image: "https://imgs.search.brave.com/x7P2oY-I5Q0zvHpE19nIysdMrfi9FMeM5HTz-MRSSHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY2LzcwLzI5/LzM2MF9GXzY2Njcw/Mjk0NV8wMlBwRUs3/Y0pFSU1CbmxucENI/VkttelhrSkYyTHlS/Vi5qcGc" },
{ name: "Solapur", state: "Maharashtra", famousSpot: "Siddheshwar Temple", description: "Textile hub known for chadars and lakes.", image: "https://imgs.search.brave.com/2mmr9yykfSymT6GQiW5HPS3GN6j6Spx2mh9ca9dtZJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzUzL1NpZGRoZXNo/d2FyX3RlbXBsZV8w/Mi5KUEc" },
{ name: "Kolhapur", state: "Maharashtra", famousSpot: "Mahalaxmi Temple", description: "Cultural city famous for cuisine and temples.", image: "https://imgs.search.brave.com/aOW3EoJtARSqq4H0ytSrH5s4jRsE-aDEwOvUQI1XSyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTU5/Njg2MTQ4L3N0b2Nr/LXBob3RvLWNhcnZl/ZC1waWxsYXItYXQt/cGFuY2hhZ2FuZ2Et/Z2hhdC1zaGl2LW1h/bmRpci1rb2xoYXB1/ci1tYWhhcmFz" },

{ name: "Nanded", state: "Maharashtra", famousSpot: "Hazur Sahib", description: "Major Sikh pilgrimage city.", image: "https://imgs.search.brave.com/TYbI31J2EkmIeZJB6sv2Y89trmT9tc3RDP3gfK6T-9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA1/NjMwODc5L3Bob3Rv/L3NocmktaGF6dXIt/c2FoaWItZ3VydWR3/YXJhLW5hbmRlZC1t/YWhhcmFzaHRyYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WWt2MnZGb1dpXzhV/QTVMbnNMMXpXdUNR/cWVVLWxsRjVNUjdF/YzdSWkkxTT0" },
{ name: "Latur", state: "Maharashtra", famousSpot: "Udgir Fort", description: "Historic city with education centers.", image: "https://imgs.search.brave.com/OQ0eDTopg6rZ5Bn6jdm1RJo70XknYAGrcbuRysN6SJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/czN3YWFzLmdvdi5p/bi9zMzE3ZTYyMTY2/ZmM4NTg2ZGZhNGQx/YmMwZTE3NDJjMDhi/L3VwbG9hZHMvMjAx/OC8wMy8yMDE4MDMx/NDY3LTMwMHgyMjUu/anBn" },
{ name: "Akola", state: "Maharashtra", famousSpot: "Raj Rajeshwar Temple", description: "City known for cotton and culture.", image: "https://imgs.search.brave.com/aeKDI4I4DhhFFlTFklXpCabQlbmEItmfwfjguNIxuC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHJl/ZWJlc3RyYXRlZC5p/bi9pbWFnZXMvUmFq/UmFqZXNod2VyVGVt/cGxlLUFrb2xhLU1I/LmpwZWc" },
{ name: "Amravati", state: "Maharashtra", famousSpot: "Ambadevi Temple", description: "Vidarbha city known for heritage and culture.", image: "https://imgs.search.brave.com/2dScpCa2tCzH1GqEY4lUfaiwqqxGxWGHZQbbZBFM90c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9hbWJhZGV2aS10/ZW1wbGUtYW1yYXZh/dGktbWFoYXJhc2h0/cmEtYXR0ci1hYm91/dD9xbHQ9ODImdHM9/MTcyNjY2ODM4NzM0/OA" },
{ name: "Jalgaon", state: "Maharashtra", famousSpot: "Ajanta Caves", description: "Banana city of India.", image: "https://source.unsplash.com/800x600/?jalgaon" },


{ name: "Thane", state: "Maharashtra", famousSpot: "Upvan Lake", description: "Lake city with strong urban development.", image: "https://imgs.search.brave.com/5qLoVAUxdDICWb9F0fjXbvJUuuF77SY9s5hnt3-gsOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91cGF2/YW4tbGFrZS10aGFu/ZS1tYWhhcmFzaHRy/YS1uZXctZ2hhdC1j/b25zdHJ1Y3Rpb24t/Y2l0eS15ZXdvb3It/dmlsbGFnZS1lbmQt/MTY2NzE1OTcyLmpw/Zw" },
{ name: "Vasai-Virar", state: "Maharashtra", famousSpot: "Arnala Fort", description: "Fast-growing coastal metro zone.", image: "https://source.unsplash.com/800x600/?vasai" },
{ name: "Sangli", state: "Maharashtra", famousSpot: "Sangli Fort", description: "Known for turmeric and agriculture.", image: "https://source.unsplash.com/800x600/?sangli" },
{ name: "Satara", state: "Maharashtra", famousSpot: "Kaas Plateau", description: "City known for natural beauty and heritage.", image: "https://imgs.search.brave.com/mDpXN_R1VDOkBaEQoTe6t-nj8RJ9txf48fWPGvMURQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvZ2Vu/LzEyMzk4L1RyaXBE/b2N1bWVudC8xNTU1/MjQwOTQ3X2ltZ18w/NTA0LmpwZy53ZWJw" },

{ name: "Ichalkaranji", state: "Maharashtra", famousSpot: "Shri Mahadev Temple", description: "Textile city known as Manchester of Maharashtra.", image: "https://source.unsplash.com/800x600/?ichalkaranji" },
{ name: "Malegaon", state: "Maharashtra", famousSpot: "Fort of Malegaon", description: "Historic and industrial town.", image: "https://source.unsplash.com/800x600/?malegaon" },
{ name: "Ahmednagar", state: "Maharashtra", famousSpot: "Ahmednagar Fort", description: "City with rich Mughal history.", image: "https://source.unsplash.com/800x600/?ahmednagar" },
{ name: "Beed", state: "Maharashtra", famousSpot: "Kankaleshwar Temple", description: "Historic district with ancient monuments.", image: "https://source.unsplash.com/800x600/?beed" },
{ name: "Parbhani", state: "Maharashtra", famousSpot: "Jintur Jain Temple", description: "City with religious and cultural importance.", image: "https://imgs.search.brave.com/dDLDQnEoG8aZUy9-6H4WH34lJak6R_e2f-7lkLZwoi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvcGFyYmhhbmkv/aTMvOTk5OXAyNDUy/LjI0NTIuMTIxMTAx/MTIyOTA3Lms5aTMv/Y2F0YWxvZ3VlL3No/cmktZGlnYW1iYXIt/amFpbi10ZW1wbGUt/amludHVyLXBhcmJo/YW5pLXBhcmJoYW5p/LWphaW4tdGVtcGxl/cy1wYWNrRXQ3SEdV/LmpwZz93PTM4NDAm/cT03NQ" },
{ name: "Maheshtala", state: "West Bengal", famousSpot: "Batanagar Riverside", description: "A suburban city along the Hooghly River known for its peaceful riverside views.", image: "https://source.unsplash.com/1600x900/?hooghly-river" },

{ name: "Tiruvottiyur", state: "Tamil Nadu", famousSpot: "Tiruvottiyur Vadivudai Amman Temple", description: "One of the oldest temples in Chennai dedicated to Goddess Parvati.", image: "https://source.unsplash.com/1600x900/?chennai-temple" },

{ name: "Avadi", state: "Tamil Nadu", famousSpot: "Arignar Anna Zoological Park", description: "A major suburb of Chennai known for military establishments and greenery.", image: "https://source.unsplash.com/1600x900/?chennai" },

{ name: "Kamarhati", state: "West Bengal", famousSpot: "Dakshineswar Temple", description: "A busy industrial area near Kolkata with quick access to historic temples.", image: "https://source.unsplash.com/1600x900/?kolkata" },

{ name: "Bhalswa Jahangir Pur", state: "Delhi", famousSpot: "Yamuna Riverfront", description: "A developing region in North Delhi near major road connections.", image: "https://source.unsplash.com/1600x900/?delhi" },

{ name: "Gopalpur", state: "West Bengal", famousSpot: "Eco Park", description: "A serene locality with modern parks and lakes near Kolkata.", image: "https://source.unsplash.com/1600x900/?kolkata-park" },

{ name: "Saharsa", state: "Bihar", famousSpot: "Kosi River", description: "A city located in the Kosi river basin known for agriculture.", image: "https://source.unsplash.com/1600x900/?river" },

{ name: "Srikakulam", state: "Andhra Pradesh", famousSpot: "Arasavalli Sun Temple", description: "A coastal city famous for one of the few Sun temples in India.", image: "https://source.unsplash.com/1600x900/?sun-temple" },

{ name: "Deoghar", state: "Jharkhand", famousSpot: "Baidyanath Jyotirlinga", description: "A major pilgrimage destination known for the Jyotirlinga temple.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Bettiah", state: "Bihar", famousSpot: "Bettiah Raj", description: "A historic town with remnants of royal architecture.", image: "https://source.unsplash.com/1600x900/?bihar" },

{ name: "Giridih", state: "Jharkhand", famousSpot: "Parasnath Hills", description: "Heart of Jain pilgrimages with scenic mountains.", image: "https://source.unsplash.com/1600x900/?hills" },

{ name: "Sambalpur", state: "Odisha", famousSpot: "Hirakud Dam", description: "Known for one of the world's longest earthen dams.", image: "https://source.unsplash.com/1600x900/?dam" },

{ name: "Bhimavaram", state: "Andhra Pradesh", famousSpot: "Somarama Temple", description: "A cultural center known for its Pancharama Kshetra temple.", image: "https://source.unsplash.com/1600x900/?andhra-temple" },

{ name: "Madanapalle", state: "Andhra Pradesh", famousSpot: "Horsley Hills", description: "A cool hill station near the town offering scenic views.", image: "https://source.unsplash.com/1600x900/?hill-station" },

{ name: "Dindigul", state: "Tamil Nadu", famousSpot: "Dindigul Fort", description: "Popular for its historic hill-top fort and biryani.", image: "https://source.unsplash.com/1600x900/?fort" },

{ name: "Bhiwani", state: "Haryana", famousSpot: "Star Monument", description: "Known as the 'City of Temples' with rich cultural heritage.", image: "https://source.unsplash.com/1600x900/?haryana" },

{ name: "Kharagpur", state: "West Bengal", famousSpot: "IIT Kharagpur", description: "Famous for India’s first IIT and Asia’s longest railway platform.", image: "https://source.unsplash.com/1600x900/?iit" },



{ name: "Hospet", state: "Karnataka", famousSpot: "Hampi", description: "Gateway to the UNESCO World Heritage site of Hampi.", image: "https://source.unsplash.com/1600x900/?hampi" },

{ name: "Nandyal", state: "Andhra Pradesh", famousSpot: "Yaganti Temple", description: "Surrounded by hills and ancient temples.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Morena", state: "Madhya Pradesh", famousSpot: "Chambal Ravines", description: "Famous for ravines, wildlife, and ancient temples.", image: "https://source.unsplash.com/1600x900/?ravines" },

{ name: "Tonk", state: "Rajasthan", famousSpot: "Sunehri Kothi", description: "Known for its Golden Mansion decorated with glass work.", image: "https://source.unsplash.com/1600x900/?rajasthan" },

{ name: "Raiganj", state: "West Bengal", famousSpot: "Kulik Bird Sanctuary", description: "A paradise for migratory birds and nature lovers.", image: "https://source.unsplash.com/1600x900/?birds" },

{ name: "Katihar", state: "Bihar", famousSpot: "Manihari Ghat", description: "A transport hub with scenic views near the Ganga.", image: "https://source.unsplash.com/1600x900/?ganga" },

{ name: "Sirsa", state: "Haryana", famousSpot: "Dera Sacha Sauda", description: "A historical region with agricultural importance.", image: "https://source.unsplash.com/1600x900/?haryana" },

{ name: "Hosur", state: "Tamil Nadu", famousSpot: "Kelavarapalli Dam", description: "An industrial town near Bangalore with scenic beauty.", image: "https://source.unsplash.com/1600x900/?dam" },

{ name: "Kottayam", state: "Kerala", famousSpot: "Vembanad Lake", description: "Known for lakes, backwaters, and publishing houses.", image: "https://source.unsplash.com/1600x900/?kerala-backwaters" },

{ name: "Balurghat", state: "West Bengal", famousSpot: "Hili Border", description: "A peaceful town close to the India-Bangladesh border.", image: "https://source.unsplash.com/1600x900/?border" },

{ name: "Nagaon", state: "Assam", famousSpot: "Kaziranga National Park", description: "Close to the famous Kaziranga wildlife sanctuary.", image: "https://source.unsplash.com/1600x900/?kaziranga" },

{ name: "Lakhimpur", state: "Assam", famousSpot: "Subansiri River", description: "Known for tea gardens and river landscapes.", image: "https://source.unsplash.com/1600x900/?tea-garden" },

{ name: "Buxar", state: "Bihar", famousSpot: "Brahmeshwar Nath Temple", description: "A historic town known from Ramayana legends.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Porbandar", state: "Gujarat", famousSpot: "Gandhi Birthplace", description: "Birthplace of Mahatma Gandhi with beautiful beaches.", image: "https://source.unsplash.com/1600x900/?porbandar" },

{ name: "Sikar", state: "Rajasthan", famousSpot: "Harshnath Temple", description: "A Shekhawati region city famous for fresco paintings.", image: "https://source.unsplash.com/1600x900/?shekhawati" },

{ name: "Tadepalligudem", state: "Andhra Pradesh", famousSpot: "Pentapadu Fields", description: "Green town known for fertile farmland and education.", image: "https://source.unsplash.com/1600x900/?farm" },

{ name: "Mannargudi", state: "Tamil Nadu", famousSpot: "Rajagopalaswamy Temple", description: "A temple town with rich Dravidian architecture.", image: "https://source.unsplash.com/1600x900/?dravida-temple" },

{ name: "Hathras", state: "Uttar Pradesh", famousSpot: "Kilkari Temple", description: "A historic town with old forts and local markets.", image: "https://source.unsplash.com/1600x900/?uttar-pradesh" },

{ name: "Karaikkudi", state: "Tamil Nadu", famousSpot: "Chettinad Palace", description: "Famous for Chettinad mansions and spicy cuisine.", image: "https://source.unsplash.com/1600x900/?chettinad" },

{ name: "Dhamtari", state: "Chhattisgarh", famousSpot: "Gangrel Dam", description: "Known for scenic water bodies and eco-tourism.", image: "https://source.unsplash.com/1600x900/?chhattisgarh" },

{ name: "Yavatmal", state: "Maharashtra", famousSpot: "Tipeshwar Wildlife Sanctuary", description: "A peaceful town with forests and wildlife.", image: "https://source.unsplash.com/1600x900/?tiger" },

{ name: "Gonda", state: "Uttar Pradesh", famousSpot: "Prayag Ghat", description: "Agricultural center with historical temples.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Haldia", state: "West Bengal", famousSpot: "Haldia Dock", description: "An industrial port city with coastal charm.", image: "https://source.unsplash.com/1600x900/?port" },

{ name: "Wardha", state: "Maharashtra", famousSpot: "Gitai Mandir", description: "Gandhian town known for ashrams and peaceful life.", image: "https://source.unsplash.com/1600x900/?maharashtra" },

{ name: "Pithampur", state: "Madhya Pradesh", famousSpot: "Tincha Falls", description: "Known as the Detroit of India for industries.", image: "https://source.unsplash.com/1600x900/?waterfall" },

{ name: "Banswara", state: "Rajasthan", famousSpot: "Mahi Dam", description: "City of hundred islands with tribal culture.", image: "https://source.unsplash.com/1600x900/?tribal" },

{ name: "Begusarai", state: "Bihar", famousSpot: "Kanwar Lake", description: "Known for Asia’s largest freshwater oxbow lake.", image: "https://source.unsplash.com/1600x900/?lake" },

{ name: "Baripada", state: "Odisha", famousSpot: "Simlipal National Park", description: "A wildlife paradise with tigers and waterfalls.", image: "https://source.unsplash.com/1600x900/?simlipal" },

{ name: "Nalanda", state: "Bihar", famousSpot: "Nalanda University Ruins", description: "Home to ancient world-famous Buddhist university.", image: "https://source.unsplash.com/1600x900/?nalanda" },

{ name: "Chittorgarh", state: "Rajasthan", famousSpot: "Chittorgarh Fort", description: "One of India's largest forts and symbol of Rajput valor.", image: "https://source.unsplash.com/1600x900/?chittorgarh" },

{ name: "Alappuzha", state: "Kerala", famousSpot: "Backwaters of Alleppey", description: "Known as the ‘Venice of the East’ for its backwaters.", image: "https://source.unsplash.com/1600x900/?alleppey" },
{ name: "Puri", state: "Odisha", famousSpot: "Jagannath Temple", description: "Famous pilgrimage city with annual Rath Yatra festival.", image: "https://source.unsplash.com/1600x900/?puri-temple" },



{ name: "Cuttack", state: "Odisha", famousSpot: "Barabati Fort", description: "Cultural capital with historical fort and silver filigree work.", image: "https://source.unsplash.com/1600x900/?cuttack" },

{ name: "Rourkela", state: "Odisha", famousSpot: "Rourkela Steel Plant", description: "Industrial city famous for steel production.", image: "https://source.unsplash.com/1600x900/?rourkela" },


{ name: "Berhampur", state: "Odisha", famousSpot: "Gopalpur Beach", description: "Coastal city known for silk weaving and beach.", image: "https://source.unsplash.com/1600x900/?gopalpur-beach" },



{ name: "Jagdalpur", state: "Chhattisgarh", famousSpot: "Chitrakote Falls", description: "Scenic town known for waterfalls and tribal culture.", image: "https://source.unsplash.com/1600x900/?waterfall" },

{ name: "Raipur", state: "Chhattisgarh", famousSpot: "Dudhadhari Temple", description: "Capital city with historical and industrial significance.", image: "https://source.unsplash.com/1600x900/?raipur" },

{ name: "Bilaspur", state: "Chhattisgarh", famousSpot: "Amarkantak Hills", description: "City known for its temples and pilgrimage sites.", image: "https://source.unsplash.com/1600x900/?hills" },

{ name: "Durg", state: "Chhattisgarh", famousSpot: "Durg Fort", description: "Historic city with ancient forts and temples.", image: "https://source.unsplash.com/1600x900/?fort" },

{ name: "Korba", state: "Chhattisgarh", famousSpot: "Hasdeo River", description: "Industrial town known for coal and power production.", image: "https://source.unsplash.com/1600x900/?river" },

{ name: "Raigarh", state: "Chhattisgarh", famousSpot: "Bastar Palace", description: "City rich in culture and minerals.", image: "https://source.unsplash.com/1600x900/?palace" },

{ name: "Jagdalpur", state: "Chhattisgarh", famousSpot: "Kanger Valley National Park", description: "Popular for wildlife and lush greenery.", image: "https://source.unsplash.com/1600x900/?national-park" },

{ name: "Dhamtari", state: "Chhattisgarh", famousSpot: "Gangrel Dam", description: "Known for rivers and eco-tourism.", image: "https://source.unsplash.com/1600x900/?dam" },
{ name: "Ambikapur", state: "Chhattisgarh", famousSpot: "Mainpat Hills", description: "A hill station known as the 'Shimla of Chhattisgarh'.", image: "https://source.unsplash.com/1600x900/?hill-station" },

{ name: "Bhawanipatna", state: "Odisha", famousSpot: "Kalahandi Palace", description: "Historic town surrounded by scenic landscapes.", image: "https://source.unsplash.com/1600x900/?palace" },

{ name: "Balangir", state: "Odisha", famousSpot: "Harishankar Temple", description: "City known for temples and cultural festivals.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Bargarh", state: "Odisha", famousSpot: "Dhanu Jatra Festival", description: "City famous for the world’s largest open-air theater festival.", image: "https://source.unsplash.com/1600x900/?festival" },

{ name: "Barbil", state: "Odisha", famousSpot: "Iron Ore Mines", description: "Industrial town with rich mineral resources.", image: "https://source.unsplash.com/1600x900/?mines" },

{ name: "Deogarh", state: "Jharkhand", famousSpot: "Deoghar Jain Temple", description: "City known for its religious importance and temples.", image: "https://source.unsplash.com/1600x900/?temple" },

{ name: "Hazaribagh", state: "Jharkhand", famousSpot: "Hazaribagh National Park", description: "City with scenic forests and wildlife.", image: "https://source.unsplash.com/1600x900/?national-park" },

{ name: "Giridih", state: "Jharkhand", famousSpot: "Parasnath Hills", description: "Famous for Jain pilgrimage and hilly terrain.", image: "https://source.unsplash.com/1600x900/?hills" },

{ name: "Dhanbad", state: "Jharkhand", famousSpot: "Jharia Coalfield", description: "Industrial city known for coal mining.", image: "https://source.unsplash.com/1600x900/?coal-mine" },

{ name: "Bokaro Steel City", state: "Jharkhand", famousSpot: "Bokaro Steel Plant", description: "Industrial city famous for steel production.", image: "https://source.unsplash.com/1600x900/?steel-plant" },

{ name: "Jamshedpur", state: "Jharkhand", famousSpot: "Tata Steel Plant", description: "Industrial city founded by Tata with modern infrastructure.", image: "https://source.unsplash.com/1600x900/?tata-steel" },

{ name: "Chaibasa", state: "Jharkhand", famousSpot: "Netarhat Hills", description: "Town known for scenic hills and tribal culture.", image: "https://source.unsplash.com/1600x900/?netarhat" },

{ name: "Medininagar", state: "Jharkhand", famousSpot: "Palamu Fort", description: "Historic town known for forts and waterfalls.", image: "https://source.unsplash.com/1600x900/?fort" },

{ name: "Sundargarh", state: "Odisha", famousSpot: "Vedvyas Temple", description: "Town known for temples and natural beauty.", image: "https://source.unsplash.com/1600x900/?temple" },
{ name: "Thrissur", state: "Kerala", famousSpot: "Vadakkunnathan Temple", description: "Cultural capital of Kerala known for festivals and temples.", image: "https://source.unsplash.com/1600x900/?kerala-temple" },

{ name: "Kozhikode", state: "Kerala", famousSpot: "Kappad Beach", description: "Historic port city with beaches and rich culture.", image: "https://source.unsplash.com/1600x900/?kozhikode-beach" },

{ name: "Kannur", state: "Kerala", famousSpot: "St. Angelo Fort", description: "City known for handloom industry and historic forts.", image: "https://source.unsplash.com/1600x900/?fort" },

{ name: "Kollam", state: "Kerala", famousSpot: "Ashtamudi Lake", description: "Coastal city famous for backwaters and cashew processing.", image: "https://source.unsplash.com/1600x900/?ashtamudi-lake" },

{ name: "Alappuzha", state: "Kerala", famousSpot: "Backwaters of Alleppey", description: "Known as the ‘Venice of the East’ for its canals and houseboats.", image: "https://source.unsplash.com/1600x900/?alleppey-backwaters" },

{ name: "Palakkad", state: "Kerala", famousSpot: "Palakkad Fort", description: "Gateway to Kerala with scenic hills and forts.", image: "https://source.unsplash.com/1600x900/?palakkad-fort" },

{ name: "Malappuram", state: "Kerala", famousSpot: "Kottakkunnu", description: "City with historic hill fort and cultural significance.", image: "https://source.unsplash.com/1600x900/?malappuram" },

{ name: "Wayanad", state: "Kerala", famousSpot: "Edakkal Caves", description: "Hilly district known for wildlife, spice plantations, and caves.", image: "https://source.unsplash.com/1600x900/?wayanad" },

{ name: "Idukki", state: "Kerala", famousSpot: "Idukki Dam", description: "Hill district famous for dams, wildlife, and scenic landscapes.", image: "https://source.unsplash.com/1600x900/?idukki" },

{ name: "Kottayam", state: "Kerala", famousSpot: "Vembanad Lake", description: "Known for backwaters, rubber plantations, and publishing industry.", image: "https://source.unsplash.com/1600x900/?vembanad-lake" },

{ name: "Ernakulam", state: "Kerala", famousSpot: "Marine Drive", description: "Commercial hub with modern cityscape and waterfront promenade.", image: "https://source.unsplash.com/1600x900/?ernakulam" },

{ name: "Thrippunithura", state: "Kerala", famousSpot: "Hill Palace", description: "Historic town known for royal palaces and heritage.", image: "https://source.unsplash.com/1600x900/?hill-palace" },

{ name: "Kasaragod", state: "Kerala", famousSpot: "Bekal Fort", description: "Northernmost district famous for beaches and historic fort.", image: "https://source.unsplash.com/1600x900/?bekal-fort" },

{ name: "Varkala", state: "Kerala", famousSpot: "Varkala Cliff Beach", description: "Coastal town with cliffs and beach resorts.", image: "https://source.unsplash.com/1600x900/?varkala-beach" },

{ name: "Kanhangad", state: "Kerala", famousSpot: "Ananthapura Lake Temple", description: "Small town with famous lake temple and beaches.", image: "https://source.unsplash.com/1600x900/?kanhangad" },

{ name: "Payyanur", state: "Kerala", famousSpot: "Sree Rajarajeshwara Temple", description: "Town known for temples and cultural heritage.", image: "https://source.unsplash.com/1600x900/?payyanur" },

{ name: "Nilambur", state: "Kerala", famousSpot: "Teak Museum", description: "Famous for teak plantations and scenic forests.", image: "https://source.unsplash.com/1600x900/?nilambur" },

{ name: "Kollam", state: "Kerala", famousSpot: "Asramam Maidan", description: "Historic and cultural landmark of the city.", image: "https://source.unsplash.com/1600x900/?kollam" },

{ name: "Chengannur", state: "Kerala", famousSpot: "Mahadeva Temple", description: "Small town with ancient temples and religious significance.", image: "https://source.unsplash.com/1600x900/?chengannur" },

{ name: "Pandalam", state: "Kerala", famousSpot: "Pandalam Palace", description: "Town known for palace and cultural festivals.", image: "https://source.unsplash.com/1600x900/?pandalam" },

{ name: "Tirur", state: "Kerala", famousSpot: "Thunchan Parambu", description: "Cultural town known for Malayalam literary history.", image: "https://source.unsplash.com/1600x900/?tirur" },

{ name: "Manjeri", state: "Kerala", famousSpot: "Malappuram Hills", description: "City with scenic views and historic significance.", image: "https://source.unsplash.com/1600x900/?manjeri" },

{ name: "Nilambur", state: "Kerala", famousSpot: "Conolly Teak Plantation", description: "Famous for oldest teak plantation in Asia.", image: "https://source.unsplash.com/1600x900/?teak" },

{ name: "Pathanamthitta", state: "Kerala", famousSpot: "Sabarimala", description: "Pilgrimage town famous for Lord Ayyappa temple.", image: "https://source.unsplash.com/1600x900/?sabarimala" },

{ name: "Punalur", state: "Kerala", famousSpot: "Punalur Suspension Bridge", description: "Historic suspension bridge surrounded by scenic beauty.", image: "https://source.unsplash.com/1600x900/?bridge" },
{ name: "Nagercoil", state: "Tamil Nadu", famousSpot: "Suchindram Temple", description: "Town known for historic temple and cultural heritage.", image: "https://source.unsplash.com/1600x900/?suchindram-temple" },

{ name: "Kanyakumari", state: "Tamil Nadu", famousSpot: "Vivekananda Rock Memorial", description: "Southernmost tip of India with scenic sunrise views.", image: "https://source.unsplash.com/1600x900/?kanyakumari" },


{ name: "Madurai", state: "Tamil Nadu", famousSpot: "Meenakshi Amman Temple", description: "Historic city known for grand temple architecture.", image: "https://source.unsplash.com/1600x900/?madurai-temple" },



{ name: "Salem", state: "Tamil Nadu", famousSpot: "Yercaud Hills", description: "City near hill station famous for coffee and scenic views.", image: "https://source.unsplash.com/1600x900/?salem-hills" },



{ name: "Erode", state: "Tamil Nadu", famousSpot: "Bhavani Sangameshwarar Temple", description: "City famous for turmeric market and temples.", image: "https://source.unsplash.com/1600x900/?erode" },


{ name: "Dindigul", state: "Tamil Nadu", famousSpot: "Dindigul Fort", description: "Historic city known for fort and sweet delicacies.", image: "https://source.unsplash.com/1600x900/?dindigul" },

{ name: "Nagapattinam", state: "Tamil Nadu", famousSpot: "Kayarohanaswami Temple", description: "Coastal city with historic temples and fishing port.", image: "https://source.unsplash.com/1600x900/?nagapattinam" },

{ name: "Cuddalore", state: "Tamil Nadu", famousSpot: "Silver Beach", description: "Coastal city with popular beach and historic landmarks.", image: "https://source.unsplash.com/1600x900/?cuddalore" },

{ name: "Kanchipuram", state: "Tamil Nadu", famousSpot: "Ekambareswarar Temple", description: "Temple city famous for silk sarees and historic temples.", image: "https://source.unsplash.com/1600x900/?kanchipuram" },

{ name: "Pudukkottai", state: "Tamil Nadu", famousSpot: "Pudukkottai Palace", description: "City known for historic palaces and temples.", image: "https://source.unsplash.com/1600x900/?pudukkottai" },

{ name: "Karur", state: "Tamil Nadu", famousSpot: "Vishnu Temple", description: "City known for textile industry and temples.", image: "https://source.unsplash.com/1600x900/?karur" },

{ name: "Tanjore", state: "Tamil Nadu", famousSpot: "Brihadeeswarar Temple", description: "Historic city famous for grand temple and art.", image: "https://source.unsplash.com/1600x900/?tanjore-temple" },

{ name: "Sivakasi", state: "Tamil Nadu", famousSpot: "Fireworks Industry", description: "City famous for fireworks and printing industry.", image: "https://source.unsplash.com/1600x900/?sivakasi" },

{ name: "Thoothukudi", state: "Tamil Nadu", famousSpot: "Tuticorin Port", description: "Coastal city with industrial port and pearl diving history.", image: "https://source.unsplash.com/1600x900/?thoothukudi" },

{ name: "Ramanathapuram", state: "Tamil Nadu", famousSpot: "Rameswaram", description: "Pilgrimage town known for sacred temples and Pamban Bridge.", image: "https://source.unsplash.com/1600x900/?rameswaram" },

{ name: "Sivagangai", state: "Tamil Nadu", famousSpot: "Sivagangai Palace", description: "Historic town with cultural and heritage significance.", image: "https://source.unsplash.com/1600x900/?sivagangai" },

{ name: "Mayiladuthurai", state: "Tamil Nadu", famousSpot: "Mayuranathaswami Temple", description: "Town famous for temple and cultural heritage.", image: "https://source.unsplash.com/1600x900/?mayiladuthurai" },

{ name: "Tiruvannamalai", state: "Tamil Nadu", famousSpot: "Arunachaleswarar Temple", description: "Pilgrimage town famous for spiritual and hill temple.", image: "https://source.unsplash.com/1600x900/?tiruvannamalai" },

{ name: "Namakkal", state: "Tamil Nadu", famousSpot: "Namakkal Fort", description: "Historic town with fort and cultural significance.", image: "https://source.unsplash.com/1600x900/?namakkal" },

{ name: "Dharmapuri", state: "Tamil Nadu", famousSpot: "Hogenakkal Falls", description: "City famous for scenic waterfalls and rocky terrain.", image: "https://source.unsplash.com/1600x900/?hogenakkal" }



];

// Sort cities by name
cities.sort((a, b) => {
  let nameA = a.name.toUpperCase(); // ignore case
  let nameB = b.name.toUpperCase(); // ignore case
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});



    const weatherIcons = {
      0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 48: "🌫️",
      51: "🌧️", 53: "🌧️", 55: "🌧️", 61: "🌧️", 63: "🌧️", 65: "🌧️",
      71: "❄️", 73: "❄️", 75: "❄️", 80: "🌦️", 81: "🌦️", 82: "🌦️",
      95: "⛈️", 96: "⛈️", 99: "⛈️"
    };

    const weatherDescriptions = {
      0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
      45: "Foggy", 48: "Rime fog", 51: "Light drizzle", 53: "Drizzle", 55: "Dense drizzle",
      61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain",
      71: "Slight snow", 73: "Moderate snow", 75: "Heavy snow",
      80: "Rain showers", 81: "Moderate showers", 82: "Violent showers",
      95: "Thunderstorm", 96: "Thunderstorm with hail", 99: "Severe thunderstorm"
    };

    // Populate city dropdown
    const citySelect = document.getElementById('citySelect');
    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.name;
      option.textContent = `${city.name}, ${city.state}`;
      citySelect.appendChild(option);
    });

    // Handle city selection
    citySelect.addEventListener('change', async (e) => {
      const cityName = e.target.value;
      if (!cityName) return;

      const city = cities.find(c => c.name === cityName);
      
      // Update background
      document.getElementById('background').style.backgroundImage = `url(${city.image})`;
      
      // Update city title
      document.getElementById('cityTitle').style.display = 'block';
      document.getElementById('cityName').textContent = city.name;
      document.getElementById('stateName').textContent = `${city.state}, India`;
      
      // Update location info
      document.getElementById('locationInfo').style.display = 'block';
      document.getElementById('famousSpot').textContent = city.famousSpot;
      document.getElementById('spotDescription').textContent = city.description;

      // Fetch weather
      try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
        const geoData = await geoRes.json();
        const { latitude, longitude } = geoData.results[0];

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`);
        const weatherData = await weatherRes.json();
        const current = weatherData.current;

        document.getElementById('weatherIcon').textContent = weatherIcons[current.weather_code] || "🌤️";
        document.getElementById('temperature').textContent = `${Math.round(current.temperature_2m)}°`;
        document.getElementById('description').textContent = weatherDescriptions[current.weather_code] || "Unknown";
        document.getElementById('weatherDetails').style.display = 'grid';
        document.getElementById('feelsLike').textContent = `${Math.round(current.apparent_temperature)}°`;
        document.getElementById('humidity').textContent = `${current.relative_humidity_2m}%`;
        document.getElementById('windSpeed').textContent = `${Math.round(current.wind_speed_10m)} km/h`;
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    });
  
