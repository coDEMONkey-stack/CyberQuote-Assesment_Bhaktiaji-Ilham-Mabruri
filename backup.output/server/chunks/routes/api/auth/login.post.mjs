import axios from 'axios';
import { c as defineEventHandler, r as readBody, e as setResponseStatus } from '../../../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const DUMMY_USER = {
  id: 97,
  name: "Bhaktiaji Ilham Mabruri",
  username: "bhakti97",
  email: "bhaktiaji1997@gmail.com",
  address: {
    street: "Jl. RRI Kp. Parung Serab",
    suite: "Kelurahan Tirtajaya, Kecamatan Sukmajaya",
    city: "Depok",
    zipcode: "16412",
    geo: {
      lat: "-6.2088",
      lng: "106.8456"
    }
  },
  phone: "+62822-2112-2318",
  website: "https://github.com/coDEMONkey-stack",
  company: {
    name: "Cyber Quote",
    catchPhrase: "Financial Training Information Technology",
    bs: "cyberquote financial it solutions"
  }
};
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const { data: users } = await axios.get("https://jsonplaceholder.typicode.com/users/");
    const isValidUser = users.some((user2) => user2.id.toString() === body.userID) || body.userID === DUMMY_USER.id.toString();
    if (!isValidUser) {
      setResponseStatus(event, 401, "Unauthenticated. UserID not found");
      return {
        error: "Unauthenticated. UserID not found"
      };
    }
    const user = body.userID === DUMMY_USER.id.toString() ? DUMMY_USER : users.find((user2) => user2.id.toString() === body.userID);
    if (!user) {
      setResponseStatus(event, 500, "Internal Server Error");
      return {
        error: "Unexpected error: user not found after validation"
      };
    }
    return {
      token: `dummy-token-${user.id}`,
      user
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    setResponseStatus(event, 500, "Internal Server Error");
    return {
      error: "Failed to fetch user data",
      details: errorMessage
    };
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
