0x14-javascript-web_scraping

Tasks

0. Readme 

1. Write me 

2. Status code 


mandatory

Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

    The first argument is the movie ID
    You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
    You must use the module request

guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 1
A New Hope
guillaume@ubuntu:~/0x14$ ./3-starwars_title.js 5
Attack of the Clones
guillaume@ubuntu:~/0x14$ 

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x14-javascript-web_scraping
    File: 3-starwars_title.js

4. Star wars Wedge Antilles
mandatory

Write a script that prints the number of movies where the character “Wedge Antilles” is present.

    The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
    Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
    You must use the module request

guillaume@ubuntu:~/0x14$ ./4-starwars_count.js https://swapi-api.alx-tools.com/api/films
3
guillaume@ubuntu:~/0x14$ 

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x14-javascript-web_scraping
    File: 4-starwars_count.js

5. Loripsum
mandatory

Write a script that gets the contents of a webpage and stores it in a file.

    The first argument is the URL to request
    The second argument the file path to store the body response
    The file must be UTF-8 encoded
    You must use the module request

guillaume@ubuntu:~/0x14$ ./5-request_store.js http://loripsum.net/api loripsum
guillaume@ubuntu:~/0x14$ cat loripsum
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. Nam memini etiam quae nolo, oblivisci non possum quae volo. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Terram, mihi crede, ea lanx et maria deprimet. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. </p>

<p>Ad eos igitur converte te, quaeso. Pudebit te, inquam, illius tabulae, quam Cleanthes sane commode verbis depingere solebat. Sic enim censent, oportunitatis esse beate vivere. Quo studio Aristophanem putamus aetatem in litteris duxisse? Aeque enim contingit omnibus fidibus, ut incontentae sint. Ut aliquid scire se gaudeant? Qui enim existimabit posse se miserum esse beatus non erit. Putabam equidem satis, inquit, me dixisse. </p>

<p>Duo Reges: constructio interrete. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? Illud non continuo, ut aeque incontentae. Illa videamus, quae a te de amicitia dicta sunt. At ille pellit, qui permulcet sensum voluptate. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. </p>

<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nos cum te, M. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Apparet statim, quae sint officia, quae actiones. Ergo instituto veterum, quo etiam Stoici utuntur, hinc capiamus exordium. Eadem nunc mea adversum te oratio est. Quid, si etiam iucunda memoria est praeteritorum malorum? Hoc enim constituto in philosophia constituta sunt omnia. </p>

guillaume@ubuntu:~/0x14$ 

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x14-javascript-web_scraping
    File: 5-request_store.js

6. How many completed?
mandatory

Write a script that computes the number of tasks completed by user id.

    The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    Only print users with completed task
    You must use the module request

guillaume@ubuntu:~/0x14$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ '1': 11,
  '2': 8,
  '3': 7,
  '4': 6,
  '5': 12,
  '6': 6,
  '7': 9,
  '8': 11,
  '9': 8,
  '10': 12 }
guillaume@ubuntu:~/0x14$

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x14-javascript-web_scraping
    File: 6-completed_tasks.js

7. Who was playing in this movie?
#advanced

Write a script that prints all characters of a Star Wars movie:

    The first argument is the Movie ID - example: 3 = “Return of the Jedi”
    Display one character name by line
    You must use the Star wars API
    You must use the module request

guillaume@ubuntu:~/0x14$ ./100-starwars_characters.js 3
Darth Vader
R2-D2
Luke Skywalker
Han Solo
Leia Organa
Chewbacca
Palpatine
Obi-Wan Kenobi
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Boba Fett
Ackbar
Arvel Crynyd
Mon Mothma
Nien Nunb
Wicket Systri Warrick
Bib Fortuna
C-3PO
Lando Calrissian
guillaume@ubuntu:~/0x14$ 

Repo:

    GitHub repository: alx-higher_level_programming
    Directory: 0x14-javascript-web_scraping
    File: 100-starwars_characters.js

8. Right order
#advanced

Write a script that prints all characters of a Star Wars movie:

