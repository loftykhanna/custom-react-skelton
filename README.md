# Custom React Skeleton

Custom React Skeleton components - [Live Demo](https://6286d040663ad60008b52e6a-resilient-sprinkles-3564ee.netlify.app/)

## Performance

By default all components - atoms and molecules are rendered using React.memo for boosting performance.
## Test Cases

Intentionally No test cases are written because of time constraint

## Basic Usage
Its not published on npm, import as 

```tsx
import Skeleton, {SkeltonDiv, SkeltonP, SkeltonText, SkeltonSuspense}  from 'path-to-component/Skeleton'

```

Skelton is default export and all others are named export.

## Thought Process
Thought process behind writing component in above way
- Have divided componenets into Atoms and Molecules.
- Atoms Make Molecules.
- Atom components are Div(SkeltonDiv), Text(SkeltonText) and Paragraph(SkeltonP) 
- Paragraph in this case is 1 line `<p></p>` tag.
- Text conatains various paragraphs
- Div is like a container, you can give its width, height, radius and its type(like circle).
- Will disucss about Skelton and SkletonSuspense in details below


### `SkeltonDiv`

It is used to render skeleton/loading container/div

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>width?: string</code></td>
            <td>Width of Skeleton Div</td>
            <td><code>50px</code></td>
        </tr>
      <tr>
            <td><code>height?: string</code></td>
            <td>Height of Skeleton Div</td>
            <td><code>50px</code></td>
        </tr>
        <tr>
            <td><code>type?: 'box'|'circle'</code></td>
            <td>The highlight color in the skeleton animation.</td>
            <td><code>box</code></td>
        </tr>
        <tr>
            <td><code>borderRadius?: string</code></td>
            <td>Radius of the Div</td>
            <td><code>'100%'</code></td>
        </tr>
    </tbody>
</table>

#### Example

```tsx
  <SkeltonDiv width='50px' height={'50px'} type='circle'/>

```
![image](https://user-images.githubusercontent.com/10628479/169420656-4b940f9c-0f31-473a-99ba-87c9fd2235c9.png)

### `SkeltonP`

It is used to render skeleton/loading p tag

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>width?: string</code></td>
            <td>Width of Skeleton Div</td>
            <td><code>100%</code></td>
        </tr>
   </tbody>
</table>

#### Example

```tsx
 <SkeltonP width={'50%'} />:
```
![image](https://user-images.githubusercontent.com/10628479/169421030-914aa482-f4b9-4bb9-90c7-f7023ce7aacf.png)


### `SkeltonText`

It is used to render skeleton/loading mutiple `SkeltonP`

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>count?: number</code></td>
            <td>Number of P tags inside text</td>
            <td><code>1</code></td>
        </tr>
   </tbody>
</table>

#### Example

```tsx
  <SkeltonText  count={4}/>
```
![image](https://user-images.githubusercontent.com/10628479/169421331-859d23bf-a357-4cd6-beec-d5ea97b11dc1.png)





### `Skeleton`

It is a prebuilt molecules - made from existing atoms -> skeleton is of two types card and media

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>type?: 'card'| 'media'</code></td>
            <td> Render different types of prebuilt skeleton - Media or Cards</td>
            <td><code>'card'</code></td>
        </tr>
   </tbody>
</table>

#### Example

```tsx
<Skelton type="card" />
```
![image](https://user-images.githubusercontent.com/10628479/169421620-36f6f74e-5c52-469d-b964-6f0960d58936.png)


### `SkeltonSuspense`

Skeleton suspense is used when u have same multiple items to render like flipkart product page. 

#### How SkeltonSuspense works?
- you pass data to as props to this componenet. 
- If data array is empty it will render skeleton and count of skeleton is equal to multiplier which is also passed as props
- once you recieve data from some api or async way, you just update data prop, it will render actual component.
- Simply if data is empty it will render skeleton else will render actual component.
- Actual component and Suspense componenet are passed as props 

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>Suspense?: reactComponenet/code></td>
            <td>Skeleton componenet which u want to render if data is not loaded</td>
            <td></td>
        </tr>
      <tr>
            <td><code>ActualComponent?: reactComponenet/code></td>
            <td>Actual componenet which you want to render when data is loaded - suspense componenet will take care of iterartions</td>
            <td></td>
        </tr>
      <tr>
            <td><code>multiplier?: number</code></td>
            <td>No. of skeleton you want to show if data is still loading</td>
            <td><code>5</code></td>
        </tr>
        <tr>
            <td><code>data?: Array</code></td>
            <td>Data which will be iterated for rendering Actual component</td>
            <td><code>[]</code></td>
        </tr>
    </tbody>
</table>

#### Example

Please see example folder for better understanding

