# Backend

African Marketplace
WEB_PT_TT95
Austin Healy

ENDPOINTS:
"/" - WELCOME MESSAGE.


"/API/REGISTER" -POST- REGISTER A NEW USER CONSISTING OF "USERNAME"(STRING), "PASSWORD"(STRING), AND "ROLE"(STRING("OWNER" OR "USER")).


"/API/LOGIN" -POST- LOG IN WITH A REGISTERED USERNAME AND PASSWORD.


"API/USERS" -GET- GET A LIST OF ALL USERS (must be logged in).


"API/ITEMS" -GET- GET A LIST OF FOOD ITEMS (must be logged in).


"API/ITEMS" -POST- CREATE A NEW FOOD ITEM CONSISTING OF "NAME"(STRING), "DESCRIPTION"(STRING), "PRICE"(DOUBLE, EX: 2.50) AND LOCATION(STRING).


"/API/ITEMS/:ID" -PUT- EDIT AN ITEM BY ID (changes go in the request body, must be logged in).


"/API/ITEMS/:ID" -DELETE- DELETE A FOOD ITEM BY ID (must be logged in).
