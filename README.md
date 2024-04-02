# Explore New Music

## Video Demo: URL

### Description:

This app allows users to explore new music by searching for a favorite artist which then displays a list of similar/related artists. When a user clicks on a similar artist, they then find that artist's details and concerts.

### Design Choices:

When starting this project I decided I wanted to learn more about accessibility and use Typescript because I don’t have much experience with either and I thought this would be a good learning opportunity.

#### Accessibility

A goal for this project was level AAA of conformance with the Web Content Accessibility Guidelines (WCAG). In preparation and to learn more about accessible web development I watched several videos and sought out the experience of Evelyn Wightman who was a mentor in accessibility and also tested my project. I used several accessibility tools while completing my project including WAVE Evaluation Tool and Voiceover to ensure my website was accessible.

#### APIs

I ultimately decided to not build a backend and instead relied on two APIs: Spotify’s Web API and Ticketmaster’s Discovery API. I use Spotify's Web API to fetch an artist's related artists and details about a specific artist. I used Ticketmaster's Discovery API to fetch events with that specific artist.

### File Architecture:

In my source folder I have a components, lib, and views folder where the majority of my code is. In components folder I have the Typescript files ArtistCard.tsx, ArtistDetail.tsx, ConcertList.tsx, and Footer.tsx. In my lib folder I have my spotify-api-hooks.ts and ticketmaster-api-hooks.ts. Finally in the views folder I have Artists.tsx and Detail.tsx as well as corresponding .css files which are imported to each respectively. Both Artists.tsx and Detail.tsx are routes in App.tsx where Artists is the home page and Detail is the page that displays the details when you click on a specific artist card. Note moving forward I will be dropping .tsx/.ts/.css from the file names.

Artist displays the form to search for an artist’s related artists and on submit calls the getSimilarArtists() function and when FetchState is successful there is an unordered list that maps over the list of related artists and passes the artist as props to the ArtistCard. ArtistCard uses Ract Bootstrap elements to display the artist’s image and name as a card and each card is a link to the detail page for that specific artist.

When a user clicks on an artist card they are redirected to the detail page at /artist/artist.id/artist.name. Deciding on the params I wanted to include was a big design decision. I ultimately decided on including the artist id and artist name because then I could pass the id to the ArtistDetail component and the name to the ConcertList component and would avoid an extra API call or prop drilling.

Detail has a button to return to the home page and the ArtistDetail and ConcertList components where the id and name are passed as props to each respectively. The ArtistDetail component has a useEffect that calls the getArtistDetails() function on page load and displays a card with the artist details including a link to Spotify to listen to the artist’s music. The ConcertList also has a useEffect that calls getEvents() and when successful displays the list of concerts for the artist.

The spotify-api-hooks file has two main functions getSimilarArtists() and getArtistDetails(). For each, there is a helper function called getAccessTokent that is called for the API call to be successful. When calling getSimilarArtist() there is an additional helper function called getArtistId() so that when a user searches a name the id is fetched to then hit the endpoint with the id to fetch the related artists. The ticketmaster-api-hooks only has one function named getEvents() that uses the artist’s name as a parameter to search for events with that artist. I also included a .env.local file to store my client id and secrets and then imported them to both spotify-api-hooks and ticketmaster-api-hooks. Finally, types.ts is where I stored the FetchState enumeration and defined the EventData and ArtistData types.

### Tools:

- GitHub Copilot
- Bootstrap
- WAVE Evaluation Tool
- Voiceover

### Progress and Future Work:

My MVP was a list of similar artists cards with details about each artist and after successfully achieving that I added the Detail page which included the details about the artist and their upcoming concerts. I would love to add features to the concert list in the future including filters event by location, radius from location, and ticket price for example.
