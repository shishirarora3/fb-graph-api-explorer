const userAccessToken = "EAACEdEose0cBAFc5GfoZC8RkyHRnIO1rlxu5rveCFMg5e54ZArFZAWpZB2Fc73Iu9F2uF9O3MbvKBiwRhyWI9Lug5S0Wi0vbnQg5ylLAFhEQ7yUj3gFZBi1Ea2bzGwNbigdXpQYT7SPcQRiYUwTl6kWA2g66arp4jIAFFSvTAMRowHyw2y9rpbA4ysB16FAlU02lOkI3RIwZDZD";
const aboutMe = '/me';
const myPosts = '/me/posts';
const fbAboutMe = `https://graph.facebook.com/${aboutMe}?fields=hometown,email,about,birthday,education,name,location,work&access_token=`;
const fbMyPosts = `https://graph.facebook.com/${myPosts}?access_token=`;

const getObjectFromJson = responses => responses.map(response => response.json());
const throwIfNotOk = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const loadData = (query = userAccessToken) => {
  return Promise.all([fetch(fbAboutMe+query), fetch(fbMyPosts+query)])
    .then(responses => Promise.all(getObjectFromJson(responses)));
};

export default loadData;
