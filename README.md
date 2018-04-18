# pipz-tracker

<img src="https://pipz.com/static/images/_new/sections/automate-customer-acquisition-conversion.png" alt="pipz" align="right" />

Pipz Tracker is a zero-dependency library that includes tracking in your application.

## Install

```bash
# With npm
npm install pipz-tracker
```

## Usage

```javascript
import pipz from 'pipz-tracker';
```

Create a `.env` file in the root directory of your project. Add
environment-specific variables of Pipz Tracker API Key. For example:

```dosini
REACT_APP_PIPZ_API_KEY=0123456789
PIPZ_API_KEY=0123456789
```

See more about API Keys, Events, Tracking, etc:
- [Pipz Documentation](https://docs.pipz.com/)

## Event Tracking

Call tracking using sample script your pages:

```javascript
pipz.track('Downloaded Ebook', {
      title: 'Growth Hacking 101',
      language: 'English',
      pages: '63',
      author: 'Pipz Automation'
});
```

Or in your button/action element:

```html
<button onclick =
    "pipz.track('Downloaded Ebook', {
         title: 'Growth Hacking 101',
         language: 'English',
         pages: '63',
         author: 'Pipz Automation'
    });"
>Download ebook!</button>
```

See more [here](https://docs.pipz.com/central-de-ajuda/event-tracking/enviar-eventos-personalizados).

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

See [LICENSE](LICENSE)