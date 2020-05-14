# Initial Website Repository Setup

/student, /company, /admin for our website interface views.

/common for any shared code between our website interface views.

/static for any static things like images.

I have made some initial configurations for absolute imports to keep our code cleaner from excessive relative imports. Could be better, but works for now. Feel free to change it up to whatever works better.

```javascript
import {SampleComponent} from '@website/common/components/SampleComponent';
import {SomeAdminComponent} from '@website/admin/src/AnotherComponent';
```

Refer to [here](https://medium.com/frontend-digest/using-create-react-app-in-a-monorepo-a4e6f25be7aa) for a guide I followed on configuring absolute imports.
