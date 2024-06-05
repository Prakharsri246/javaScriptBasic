#  <script src =" "   />
 - If script tag is encountered the script are html parsing stops 
 - scripts are fetched and  executed then html parsing continues 

# <script async src= " " />
 - If script tag is encountered the script are html parsing continues till the time scripts are fetched
 - As soon as script are fetched and move on execution the html parsing stops 
 - after exectuion of the scripts the html parsing continues 

# <script defer src =" " />

- In case of differ html parsing continues and parallelly fetches scripts if encountered
- after html parsing is over then scripts are executed


# async - Does not Garenty the order of execution
# differ- Maintaine order of execution