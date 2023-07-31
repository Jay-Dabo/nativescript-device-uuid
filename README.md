# NativeScript UUID

This is a plugin for Nativescript that allows you to get a UUID (Universal Unique Identifier) for a device.

Uses [`SAMKeychain Cocoa Pod`](https://cocoapods.org/pods/SAMKeychain).

## Installation

Run the following command from the root of your project:

```bash
yarn add nativescript-device-uuid
ns plugin add nativescript-device-uuid
npm install nativescript-device-uuid
```

## Usage

#### JavaScript
```js
  const nsUuid = require("nativescript-device-uuid");

  const uuid = nsUuid.getUUID();
  console.log(`The device UUID is ${uuid}`);
```

#### TypeScript
```typescript
  import { getUUID } from 'nativescript-device-uuid';

  const uuid = getUUID();
  console.log(`The device UUID is ${uuid}`);
```