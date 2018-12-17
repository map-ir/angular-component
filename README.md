# Mapir Angular Component 🔥

<div style="text-align: center">
<a href="https://map.ir"> <img src="https://map.ir/css/images/site-logo.png" /> </a>
</div>

Angular component to display a map from [**Map.ir**](http://map.ir) service in ease using defined directives.

## Installation

```shell
npm i mapir-angular leaflet @types/leaflet
```

### Preparation

Open your `app.module.ts` file and import Map.ir component:

```js
import { Map } from 'mapir-angular';
```

Also add `Map` variable to `imports` array to have a `NgModule` decorator like this:

```js
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Map
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Usage

In your component's HTML (e.g. in `app.component.html`) add a `mapir-map` element and use described directives to create your desired map:

```html
<div class="mapp"> <!-- not a typo : map + app -->
  <mapir-map
      [mapPosition] = "{lat: 34, lng: 51}"
      [zoom] = "6"
      [markerPosition] = "{lat: 34, lng: 51}"
  ></mapir-map>
</div>
```

- use `mapPosition` directive to define : Initial location of the map
- use `zoom` directive to define : Initial zoom level of the map
- use `markerPosition` directive to define : markerPosition
+ use `markerIconUrl` directive to define : Marker icon's URL (note that the url is from project root and wraps in quotes)

to properly display your map place this element inside an element with specific `width` and `height`.

```css
.mapp {
  width: 400px;
  height: 500px;
}
```

<iframe src="https://stackblitz.com/edit/mapir-angular-component-example?ctl=1&embed=1&file=src/app/app.module.ts" height="400px" width="100%"></iframe>

Or 

[![Edit mapir-angular-component-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k394n9k7y3)

## Publication

```shell
npm version <major | minor | patch>
npm publish
```
