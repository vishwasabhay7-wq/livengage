const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 1337,
  path: '/api/home-page?populate[hero][populate]=*&populate[stats][populate][stats]=*&populate[services][populate][services]=*&populate[whyChooseUs][populate]=*&populate[testimonials][populate][testimonials][populate][avatar][populate]=*&populate[faq][populate][faqs]=*&populate[cta][populate]=*',
  method: 'GET',
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(JSON.stringify(JSON.parse(data), null, 2));
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
