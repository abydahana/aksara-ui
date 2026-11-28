# Rating

`.rating` is a star rating built from native radio inputs, so it needs no JavaScript: it works with the keyboard, submits with the form and can be `required`. Hovering previews the score and the chosen star fills along with every star before it. Without inputs, `.rating-display` shows a read-only score with half stars, for product cards and review summaries.

::html
<div class="docs-preview">
  <div class="docs-row gap-4">
    <div class="rating" role="radiogroup" aria-label="Your rating">
      <input type="radio" name="rtIntro" id="rtIntro-1" value="1" /><label for="rtIntro-1" title="1 star"><span class="visually-hidden">1 star</span></label>
      <input type="radio" name="rtIntro" id="rtIntro-2" value="2" /><label for="rtIntro-2" title="2 stars"><span class="visually-hidden">2 stars</span></label>
      <input type="radio" name="rtIntro" id="rtIntro-3" value="3" /><label for="rtIntro-3" title="3 stars"><span class="visually-hidden">3 stars</span></label>
      <input type="radio" name="rtIntro" id="rtIntro-4" value="4" checked /><label for="rtIntro-4" title="4 stars"><span class="visually-hidden">4 stars</span></label>
      <input type="radio" name="rtIntro" id="rtIntro-5" value="5" /><label for="rtIntro-5" title="5 stars"><span class="visually-hidden">5 stars</span></label>
    </div>
    <span class="rating rating-display" role="img" aria-label="Rating: 4.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span></span>
  </div>
</div>
::end

```html
<div class="rating" role="radiogroup" aria-label="Your rating">
  <input type="radio" name="score" id="score-1" value="1" /><label for="score-1" title="1 star"
    ><span class="visually-hidden">1 star</span></label
  >
  <input type="radio" name="score" id="score-2" value="2" /><label for="score-2" title="2 stars"
    ><span class="visually-hidden">2 stars</span></label
  >
  <input type="radio" name="score" id="score-3" value="3" /><label for="score-3" title="3 stars"
    ><span class="visually-hidden">3 stars</span></label
  >
  <input type="radio" name="score" id="score-4" value="4" checked /><label for="score-4" title="4 stars"
    ><span class="visually-hidden">4 stars</span></label
  >
  <input type="radio" name="score" id="score-5" value="5" /><label for="score-5" title="5 stars"
    ><span class="visually-hidden">5 stars</span></label
  >
</div>

<span class="rating rating-display" role="img" aria-label="Rating: 4.5 out of 5">
  <span class="rating-star is-on"></span>
  <span class="rating-star is-on"></span>
  <span class="rating-star is-on"></span>
  <span class="rating-star is-on"></span>
  <span class="rating-star is-half"></span>
</span>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ name: "score", value: 4, label: "Your rating" });
Rating({ value: 4.5 }); // display only
```

---

## How It Works

The stars are written in natural order (1, 2, 3, 4, 5). CSS fills the checked star and every star before it (`:has()`), and does the same while hovering. Each `<input>` must come directly before its `<label>`, and both must be direct children of `.rating`. In RTL the row simply mirrors.

The inputs are visually hidden but stay focusable. Tab moves into the group, the arrow keys change the score, and the focused star gets an outline. Right and Up raise the score, Left and Down lower it (mirrored in RTL), exactly as the stars read. Each label has visually hidden text such as "4 stars" and a `title` for the mouse tooltip.

---

## In A Review Form

Name the group with `aria-labelledby` pointing at the visible label, since a `<label>` element cannot label a group of radios. Put `required` on one of the radios to make a score mandatory.

::html
<div class="docs-preview">
  <form class="card max-w-[520px]" onsubmit="event.preventDefault(); Aksara.notify('Thanks for your review!', { icon: 'mdi-check' })">
    <div class="card-body vstack gap-4">
      <div class="hstack gap-3">
        <div class="w-[48px] h-[48px] rounded-[12px] shrink-0 [background:linear-gradient(135deg,rgb(var(--aksara-warning)/.35),rgb(var(--aksara-danger)/.2))]"></div>
        <div class="min-w-0">
          <p class="m-0 fw-semibold truncate">Colombian Arabica Coffee, 500 g</p>
          <p class="m-0 text-sm text-subtle">Delivered 24 Nov · Order ORD-10482</p>
        </div>
      </div>
      <div>
        <p class="form-label" id="rtReviewLabel">Overall rating</p>
        <div class="rating rating-lg" role="radiogroup" aria-labelledby="rtReviewLabel">
          <input type="radio" name="rtReview" id="rtReview-1" value="1" /><label for="rtReview-1" title="Terrible"><span class="visually-hidden">1 star, terrible</span></label>
          <input type="radio" name="rtReview" id="rtReview-2" value="2" /><label for="rtReview-2" title="Poor"><span class="visually-hidden">2 stars, poor</span></label>
          <input type="radio" name="rtReview" id="rtReview-3" value="3" /><label for="rtReview-3" title="Okay"><span class="visually-hidden">3 stars, okay</span></label>
          <input type="radio" name="rtReview" id="rtReview-4" value="4" /><label for="rtReview-4" title="Good"><span class="visually-hidden">4 stars, good</span></label>
          <input type="radio" name="rtReview" id="rtReview-5" value="5" required /><label for="rtReview-5" title="Excellent"><span class="visually-hidden">5 stars, excellent</span></label>
        </div>
        <p class="form-text">Tap a star to rate. Hover to preview.</p>
      </div>
      <div>
        <label class="form-label" for="rtReviewText">Your review</label>
        <textarea id="rtReviewText" class="form-control" rows="3" placeholder="How was the aroma, the roast, the packaging?"></textarea>
      </div>
      <div class="hstack justify-between gap-3">
        <span class="text-xs text-subtle">Your name is shown as "Alex M."</span>
        <button class="btn btn-primary" type="submit">Post review</button>
      </div>
    </div>
  </form>
</div>
::end

```html
<p class="form-label" id="reviewLabel">Overall rating</p>
<div class="rating rating-lg" role="radiogroup" aria-labelledby="reviewLabel">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label for="rating-1" title="Terrible"><span class="visually-hidden">1 star, terrible</span></label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label for="rating-2" title="Poor"><span class="visually-hidden">2 stars, poor</span></label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label for="rating-3" title="Okay"><span class="visually-hidden">3 stars, okay</span></label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label for="rating-4" title="Good"><span class="visually-hidden">4 stars, good</span></label>
  <input type="radio" name="rating" id="rating-5" value="5" required />
  <label for="rating-5" title="Excellent"><span class="visually-hidden">5 stars, excellent</span></label>
</div>
<p class="form-text">Tap a star to rate. Hover to preview.</p>
```

```js components
import { FormText, Rating } from "@abydahana/aksara-ui/components";

const words = { 1: "terrible", 2: "poor", 3: "okay", 4: "good", 5: "excellent" };

`<p class="form-label" id="reviewLabel">Overall rating</p>
${Rating({
  name: "rating",
  size: "lg",
  starLabel: (n) => `${n} star${n === 1 ? "" : "s"}, ${words[n]}`,
  attributes: { "aria-labelledby": "reviewLabel" }
})}
${FormText({ text: "Tap a star to rate. Hover to preview." })}`;
```

`Rating` always sets an `aria-label` (default `"Rating"`). When you add `aria-labelledby`, it takes precedence, so the visible label is announced.

---

## Display Only

Without a `name`, `Rating` renders `.rating rating-display`: `<span class="rating-star">` elements in normal order, with `.is-on` for full stars and `.is-half` for a half star. The group is `role="img"` with an `aria-label` such as "Rating: 4.5 out of 5", so screen readers announce one value instead of five stars. A product card is the typical place.

::html
<div class="docs-preview">
  <div class="row gap-3 max-w-[560px]">
    <div class="col-12 md:col-6">
      <div class="card">
        <div class="h-[120px] [background:linear-gradient(135deg,rgb(var(--aksara-info)/.3),rgb(var(--aksara-primary)/.2))]"></div>
        <div class="card-body vstack gap-2">
          <p class="m-0 fw-semibold">Rattan Tote Bag, Medium</p>
          <div class="hstack gap-2">
            <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 4.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span></span>
            <span class="text-sm"><span class="fw-semibold">4.5</span> <span class="text-subtle">(128 reviews)</span></span>
          </div>
          <p class="m-0 fw-bold">$48.00</p>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card">
        <div class="h-[120px] [background:linear-gradient(135deg,rgb(var(--aksara-success)/.3),rgb(var(--aksara-warning)/.2))]"></div>
        <div class="card-body vstack gap-2">
          <p class="m-0 fw-semibold">Handwoven Linen Throw</p>
          <div class="hstack gap-2">
            <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 4 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star"></span></span>
            <span class="text-sm"><span class="fw-semibold">4.0</span> <span class="text-subtle">(36 reviews)</span></span>
          </div>
          <p class="m-0 fw-bold">$129.00</p>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="hstack gap-2">
  <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 4.5 out of 5">
    <span class="rating-star is-on"></span>
    <span class="rating-star is-on"></span>
    <span class="rating-star is-on"></span>
    <span class="rating-star is-on"></span>
    <span class="rating-star is-half"></span>
  </span>
  <span class="text-sm"><span class="fw-semibold">4.5</span> <span class="text-subtle">(128 reviews)</span></span>
</div>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

`<div class="hstack gap-2">
  ${Rating({ value: 4.5, size: "sm" })}
  <span class="text-sm"><span class="fw-semibold">4.5</span> <span class="text-subtle">(128 reviews)</span></span>
</div>`;
```

`Rating` rounds a display value to the nearest half: from `n - 0.5` a star is half filled, from `n` it is full. So `4.3` shows four stars, `4.5` to `4.9` four and a half. Format the number next to it yourself. The half star is mirrored under `dir="rtl"`.

---

## Sizes

The stars are `1em` squares, so they follow the font size of `.rating`: `.rating-sm` is `1rem`, the default `1.375rem`, `.rating-lg` `1.875rem`. Any `text-[…]` utility works too.

::html
<div class="docs-preview">
  <div class="docs-row gap-4">
    <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 3.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span><span class="rating-star"></span></span>
    <span class="rating rating-display" role="img" aria-label="Rating: 3.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span><span class="rating-star"></span></span>
    <span class="rating rating-display rating-lg" role="img" aria-label="Rating: 3.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span><span class="rating-star"></span></span>
  </div>
</div>
::end

```html
<span class="rating rating-display rating-sm" role="img" aria-label="Rating: 3.5 out of 5">...</span>
<span class="rating rating-display" role="img" aria-label="Rating: 3.5 out of 5">...</span>
<span class="rating rating-display rating-lg" role="img" aria-label="Rating: 3.5 out of 5">...</span>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ value: 3.5, size: "sm" });
Rating({ value: 3.5 });
Rating({ value: 3.5, size: "lg" });
```

---

## Custom Maximum

`max` sets the number of stars. A 10-point scale suits detailed scores, such as a hotel review.

::html
<div class="docs-preview">
  <div>
    <p class="form-label" id="rtTenLabel">Cleanliness</p>
    <div class="rating rating-sm" role="radiogroup" aria-labelledby="rtTenLabel">
      <input type="radio" name="rtTen" id="rtTen-1" value="1" /><label for="rtTen-1" title="1 star"><span class="visually-hidden">1 star</span></label>
      <input type="radio" name="rtTen" id="rtTen-2" value="2" /><label for="rtTen-2" title="2 stars"><span class="visually-hidden">2 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-3" value="3" /><label for="rtTen-3" title="3 stars"><span class="visually-hidden">3 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-4" value="4" /><label for="rtTen-4" title="4 stars"><span class="visually-hidden">4 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-5" value="5" /><label for="rtTen-5" title="5 stars"><span class="visually-hidden">5 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-6" value="6" /><label for="rtTen-6" title="6 stars"><span class="visually-hidden">6 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-7" value="7" /><label for="rtTen-7" title="7 stars"><span class="visually-hidden">7 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-8" value="8" checked /><label for="rtTen-8" title="8 stars"><span class="visually-hidden">8 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-9" value="9" /><label for="rtTen-9" title="9 stars"><span class="visually-hidden">9 stars</span></label>
      <input type="radio" name="rtTen" id="rtTen-10" value="10" /><label for="rtTen-10" title="10 stars"><span class="visually-hidden">10 stars</span></label>
    </div>
  </div>
  <div class="hstack gap-2">
    <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 8.5 out of 10"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span><span class="rating-star"></span></span>
    <span class="text-sm"><span class="fw-semibold">8.5</span> <span class="text-subtle">/ 10 · Harbor View Hotel, Lisbon</span></span>
  </div>
</div>
::end

```html
<div class="rating rating-sm" role="radiogroup" aria-labelledby="cleanLabel">
  <input type="radio" name="clean" id="clean-1" value="1" /><label for="clean-1" title="1 star"
    ><span class="visually-hidden">1 star</span></label
  >
  <!-- 2 … 10 -->
</div>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ name: "clean", max: 10, value: 8, size: "sm", attributes: { "aria-labelledby": "cleanLabel" } });
Rating({ value: 8.5, max: 10, size: "sm" }); // "Rating: 8.5 out of 10"
```

---

## Read-Only

`readonly` keeps the radio markup but locks it: `.rating-readonly` turns off hover and clicks, and the radios are `disabled` under a display-only name. A hidden input with the real `name` still submits the value. Use it to show a customer's earlier score in an edit form; for a plain summary, the display variant is lighter.

::html
<div class="docs-preview">
  <div class="card max-w-[480px]">
    <div class="card-body vstack gap-2">
      <div class="hstack gap-3">
        <span class="avatar avatar-success avatar-sm rounded-full">MC</span>
        <div class="flex-1 min-w-0">
          <p class="m-0 fw-semibold">Maya Chen</p>
          <p class="m-0 text-xs text-subtle">Reviewed 3 days ago</p>
        </div>
        <div class="rating rating-readonly rating-sm" role="radiogroup" aria-label="Maya's rating">
          <input type="radio" name="rtRead" id="rtRead-1" value="1" disabled /><label for="rtRead-1" title="1 star"><span class="visually-hidden">1 star</span></label>
          <input type="radio" name="rtRead" id="rtRead-2" value="2" disabled /><label for="rtRead-2" title="2 stars"><span class="visually-hidden">2 stars</span></label>
          <input type="radio" name="rtRead" id="rtRead-3" value="3" disabled /><label for="rtRead-3" title="3 stars"><span class="visually-hidden">3 stars</span></label>
          <input type="radio" name="rtRead" id="rtRead-4" value="4" checked disabled /><label for="rtRead-4" title="4 stars"><span class="visually-hidden">4 stars</span></label>
          <input type="radio" name="rtRead" id="rtRead-5" value="5" disabled /><label for="rtRead-5" title="5 stars"><span class="visually-hidden">5 stars</span></label>
        </div>
      </div>
      <p class="m-0 text-sm">Fast delivery to Chicago, beans were fresh. The bag could reseal better.</p>
    </div>
  </div>
</div>
::end

```html
<div class="rating rating-readonly rating-sm" role="radiogroup" aria-label="Maya's rating" aria-readonly="true">
  <!-- 1 … 3 -->
  <input type="radio" name="score-display" id="score-4" value="4" checked disabled /><label
    for="score-4"
    title="4 stars"
    ><span class="visually-hidden">4 stars</span></label
  >
  <input type="radio" name="score-display" id="score-5" value="5" disabled /><label for="score-5" title="5 stars"
    ><span class="visually-hidden">5 stars</span></label
  >
  <input type="hidden" name="score" value="4" />
</div>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ name: "score", value: 4, readonly: true, size: "sm", label: "Maya's rating" });
```

---

## Color

The filled color comes from the `--aksara-rating-color` custom property (warning yellow by default) and empty stars from `--aksara-rating-empty`. Set either with an arbitrary property class on the `.rating`.

::html
<div class="docs-preview">
  <div class="vstack gap-3">
    <div class="hstack gap-3">
      <span class="rating rating-display [--aksara-rating-color:rgb(var(--aksara-danger))]" role="img" aria-label="Rating: 4 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star"></span></span>
      <code class="text-xs">[--aksara-rating-color:rgb(var(--aksara-danger))]</code>
    </div>
    <div class="hstack gap-3">
      <span class="rating rating-display [--aksara-rating-color:rgb(var(--aksara-primary))]" role="img" aria-label="Rating: 3.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span><span class="rating-star"></span></span>
      <code class="text-xs">[--aksara-rating-color:rgb(var(--aksara-primary))]</code>
    </div>
    <div class="hstack gap-3">
      <div class="rating [--aksara-rating-color:rgb(var(--aksara-success))]" role="radiogroup" aria-label="Rate the courier">
        <input type="radio" name="rtColor" id="rtColor-1" value="1" /><label for="rtColor-1" title="1 star"><span class="visually-hidden">1 star</span></label>
        <input type="radio" name="rtColor" id="rtColor-2" value="2" /><label for="rtColor-2" title="2 stars"><span class="visually-hidden">2 stars</span></label>
        <input type="radio" name="rtColor" id="rtColor-3" value="3" checked /><label for="rtColor-3" title="3 stars"><span class="visually-hidden">3 stars</span></label>
        <input type="radio" name="rtColor" id="rtColor-4" value="4" /><label for="rtColor-4" title="4 stars"><span class="visually-hidden">4 stars</span></label>
        <input type="radio" name="rtColor" id="rtColor-5" value="5" /><label for="rtColor-5" title="5 stars"><span class="visually-hidden">5 stars</span></label>
      </div>
      <code class="text-xs">[--aksara-rating-color:rgb(var(--aksara-success))]</code>
    </div>
  </div>
</div>
::end

```html
<span
  class="rating rating-display [--aksara-rating-color:rgb(var(--aksara-danger))]"
  role="img"
  aria-label="Rating: 4 out of 5"
>
  ...
</span>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ value: 4, className: "[--aksara-rating-color:rgb(var(--aksara-danger))]" });
Rating({ name: "courier", value: 3, className: "[--aksara-rating-color:rgb(var(--aksara-success))]" });
```

To recolor every rating on a site, set the property once in your own CSS: `.rating { --aksara-rating-color: #f59e0b; }`.

---

## Ratings Breakdown

A review summary combines a large display rating with one progress bar per star level.

::html
<div class="docs-preview">
  <div class="card max-w-[560px]">
    <div class="card-body hstack flex-wrap gap-5 [align-items:center]">
      <div class="vstack gap-1 [align-items:center]">
        <span class="text-xl fw-bold">4.6</span>
        <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 4.5 out of 5"><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-on"></span><span class="rating-star is-half"></span></span>
        <span class="text-xs text-subtle">128 reviews</span>
      </div>
      <div class="vstack gap-2 flex-1 min-w-[220px]">
        <div class="hstack gap-2 text-sm"><span class="w-[28px] text-subtle">5 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span><div class="progress progress-thin flex-1" role="progressbar" aria-label="5 stars" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning w-[72%]"></div></div><span class="w-[32px] text-end text-subtle">92</span></div>
        <div class="hstack gap-2 text-sm"><span class="w-[28px] text-subtle">4 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span><div class="progress progress-thin flex-1" role="progressbar" aria-label="4 stars" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning w-[18%]"></div></div><span class="w-[32px] text-end text-subtle">23</span></div>
        <div class="hstack gap-2 text-sm"><span class="w-[28px] text-subtle">3 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span><div class="progress progress-thin flex-1" role="progressbar" aria-label="3 stars" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning w-[6%]"></div></div><span class="w-[32px] text-end text-subtle">8</span></div>
        <div class="hstack gap-2 text-sm"><span class="w-[28px] text-subtle">2 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span><div class="progress progress-thin flex-1" role="progressbar" aria-label="2 stars" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning w-[2%]"></div></div><span class="w-[32px] text-end text-subtle">3</span></div>
        <div class="hstack gap-2 text-sm"><span class="w-[28px] text-subtle">1 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span><div class="progress progress-thin flex-1" role="progressbar" aria-label="1 star" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning w-[2%]"></div></div><span class="w-[32px] text-end text-subtle">2</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="vstack gap-1 [align-items:center]">
  <span class="text-xl fw-bold">4.6</span>
  <span class="rating rating-display rating-sm" role="img" aria-label="Rating: 4.5 out of 5">...</span>
  <span class="text-xs text-subtle">128 reviews</span>
</div>

<div class="hstack gap-2 text-sm">
  <span class="w-[28px] text-subtle">5 <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span>
  <div
    class="progress progress-thin flex-1"
    role="progressbar"
    aria-label="5 stars"
    aria-valuenow="72"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar bg-warning w-[72%]"></div>
  </div>
  <span class="w-[32px] text-end text-subtle">92</span>
</div>
```

```js components
import { Rating } from "@abydahana/aksara-ui/components";

const counts = { 5: 92, 4: 23, 3: 8, 2: 3, 1: 2 };
const total = Object.values(counts).reduce((a, b) => a + b, 0);

const bars = [5, 4, 3, 2, 1]
  .map((n) => {
    const pct = Math.round((counts[n] / total) * 100);
    return `<div class="hstack gap-2 text-sm">
      <span class="w-[28px] text-subtle">${n} <span class="mdi mdi-star text-warning" aria-hidden="true"></span></span>
      <div class="progress progress-thin flex-1" role="progressbar" aria-label="${n} stars" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-warning w-[${pct}%]"></div>
      </div>
      <span class="w-[32px] text-end text-subtle">${counts[n]}</span>
    </div>`;
  })
  .join("");

`${Rating({ value: 4.5, size: "sm" })}${bars}`;
```

`w-[72%]` and the other widths are runtime utilities, so widths computed in a template work after `Aksara.init()`.

---

## Reading The Value

An interactive rating is a normal radio group: read it from `FormData`, or listen for `change`.

```js
document.querySelector("#reviewForm").addEventListener("change", (event) => {
  if (event.target.name !== "rating") return;
  hint.textContent = ["", "Terrible", "Poor", "Okay", "Good", "Excellent"][event.target.value];
});

const score = new FormData(form).get("rating"); // "4", or null when nothing is chosen
```

---

## String Component

`Rating` renders radio inputs (1 to max) when you pass `name`, and a `role="img"` display otherwise.

```ts
import { Rating } from "@abydahana/aksara-ui/components";

Rating({ name: "rating", value: 4 }); // interactive, 4 checked
Rating({ name: "clean", max: 10, size: "sm" }); // 10 stars
Rating({ value: 4.5 }); // display, half star
Rating({ name: "score", value: 4, readonly: true }); // locked radios
```

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>name</code></td><td><code>string</code></td><td>—</td><td>Radio name. Without it the rating is display-only.</td></tr>
      <tr><td><code>value</code></td><td><code>number</code></td><td><code>0</code></td><td>Interactive: the checked star (rounded). Display: the score, halves allowed.</td></tr>
      <tr><td><code>max</code></td><td><code>number</code></td><td><code>5</code></td><td>Number of stars.</td></tr>
      <tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.rating-readonly</code>, disables the radios and submits the value through a hidden input.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md" | "lg"</code></td><td><code>"md"</code></td><td>Adds <code>.rating-sm</code> or <code>.rating-lg</code>.</td></tr>
      <tr><td><code>label</code></td><td><code>string</code></td><td><code>"Rating"</code></td><td>Group <code>aria-label</code>. For the display, the prefix of "Rating: 4.5 out of 5".</td></tr>
      <tr><td><code>starLabel</code></td><td><code>(n: number) =&gt; string</code></td><td><code>"3 stars"</code></td><td>Builds the hidden text and <code>title</code> of each star.</td></tr>
      <tr><td><code>idPrefix</code></td><td><code>string</code></td><td><code>{name}-rating</code></td><td>Prefix of the input ids (<code>{prefix}-{n}</code>). Set it when the same name appears twice on a page.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes, for example a color override.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td><code>{}</code></td><td>Extra HTML attributes on the group.</td></tr>
    </tbody>
  </table>
</div>
::end

---

## Class Reference

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Class / property</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.rating</code></td><td>Inline row of stars. Hides the radio inputs and draws each <code>&lt;label&gt;</code> as a masked star.</td></tr>
      <tr><td><code>.rating-display</code></td><td>Normal order, for <code>.rating-star</code> spans without inputs.</td></tr>
      <tr><td><code>.rating-star</code></td><td>One display star. <code>.is-on</code> fills it, <code>.is-half</code> fills the first half (mirrored in RTL).</td></tr>
      <tr><td><code>.rating-readonly</code></td><td>No hover, no clicks, default cursor.</td></tr>
      <tr><td><code>.rating-sm</code> / <code>.rating-lg</code></td><td>Star size of <code>1rem</code> / <code>1.875rem</code> (default <code>1.375rem</code>).</td></tr>
      <tr><td><code>--aksara-rating-color</code></td><td>Fill color. Default <code>rgb(var(--aksara-warning))</code>.</td></tr>
      <tr><td><code>--aksara-rating-empty</code></td><td>Empty star color. Default <code>var(--aksara-border-strong)</code>.</td></tr>
    </tbody>
  </table>
</div>
::end
