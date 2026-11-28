# Stat

Stats show one key number with its context: a label, a large tabular value, an optional unit, a delta badge that compares it with the previous period, and a caption. Use them for dashboard KPI rows, billing summaries and analytics headers. `.stat-group` puts several stats in one frame with hairline dividers between them.

::html
<div class="docs-preview">
  <div class="stat max-w-[280px]">
    <div class="stat-header"><span class="stat-label">Revenue</span><span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true"><span class="mdi mdi-cash-multiple"></span></span></div>
    <div class="stat-value">$48,240</div>
    <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+12.4%</span><span>vs last month</span></div>
  </div>
</div>
::end

```html
<div class="stat">
  <div class="stat-header">
    <span class="stat-label">Revenue</span>
    <span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true">
      <span class="mdi mdi-cash-multiple"></span>
    </span>
  </div>
  <div class="stat-value">$48,240</div>
  <div class="stat-meta">
    <span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+12.4%</span>
    <span>vs last month</span>
  </div>
</div>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({
  label: "Revenue",
  value: "$48,240",
  delta: "+12.4%",
  caption: "vs last month",
  icon: "mdi-cash-multiple",
  iconVariant: "primary"
});
```

---

## Anatomy

Every part except the label and the value is optional. The value uses tabular numbers, so figures in neighbouring stats line up and do not jitter when they update.

::html
<div class="docs-preview">
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr><th>Part</th><th>Class</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>Frame</td><td><code>.stat</code></td><td>Bordered surface block, <code>1.25rem</code> padding. <code>.stat-plain</code> removes the frame.</td></tr>
        <tr><td>Header</td><td><code>.stat-header</code></td><td>Label on the start side, optional icon tile on the end side.</td></tr>
        <tr><td>Label</td><td><code>.stat-label</code></td><td><code>.8125rem</code> medium subtle text.</td></tr>
        <tr><td>Value</td><td><code>.stat-value</code></td><td><code>1.75rem</code> bold tabular number. <code>.stat-value-sm</code> for <code>1.25rem</code>.</td></tr>
        <tr><td>Unit</td><td><code>.stat-unit</code></td><td>Smaller subtle text inside the value, such as <code>%</code>, <code>ms</code> or <code>/ month</code>.</td></tr>
        <tr><td>Meta row</td><td><code>.stat-meta</code></td><td>Wrapping row that holds the delta and the caption.</td></tr>
        <tr><td>Delta</td><td><code>.stat-delta</code></td><td>Neutral pill. <code>.stat-delta-up</code> colors it as good (green), <code>.stat-delta-down</code> as bad (red).</td></tr>
      </tbody>
    </table>
  </div>
</div>
::end

---

## KPI Row

Four stats in a responsive grid: one column on phones, two from `md`, four from `lg`.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Gross revenue</span></div>
        <div class="stat-value">$312,400</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+8.2%</span><span>vs October</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Orders</span></div>
        <div class="stat-value">4,812</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+316</span><span>vs October</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Conversion rate</span></div>
        <div class="stat-value">3.4<span class="stat-unit">%</span></div>
        <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−0.3 pt</span><span>vs October</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Average order</span></div>
        <div class="stat-value">$64.90</div>
        <div class="stat-meta"><span class="stat-delta">0.0%</span><span>no change</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="row gap-3">
  <div class="col-12 md:col-6 lg:col-3">
    <div class="stat h-full">
      <div class="stat-header"><span class="stat-label">Gross revenue</span></div>
      <div class="stat-value">$312,400</div>
      <div class="stat-meta">
        <span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+8.2%</span>
        <span>vs October</span>
      </div>
    </div>
  </div>
  <!-- three more columns -->
</div>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

const kpis = [
  { label: "Gross revenue", value: "$312,400", delta: "+8.2%" },
  { label: "Orders", value: "4,812", delta: "+316" },
  { label: "Conversion rate", value: "3.4", unit: "%", delta: "−0.3 pt" },
  { label: "Average order", value: "$64.90", delta: "0.0%", trend: "neutral", caption: "no change" }
];

`<div class="row gap-3">${kpis
  .map(
    (kpi) =>
      `<div class="col-12 md:col-6 lg:col-3">${Stat({ caption: "vs October", ...kpi, className: "h-full" })}</div>`
  )
  .join("")}</div>`;
```

`h-full` keeps the frames the same height when one caption wraps.

---

## With Icons

`icon` adds a small icon tile at the end of the header; `iconVariant` picks its color from the palette. Icons are decorative (`aria-hidden`), so the label must say what the number is.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Active members</span><span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true"><span class="mdi mdi-account-group-outline"></span></span></div>
        <div class="stat-value">12,408</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+4.1%</span><span>this week</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Payouts</span><span class="icon-tile icon-tile-sm icon-tile-success" aria-hidden="true"><span class="mdi mdi-bank-transfer-out"></span></span></div>
        <div class="stat-value">$86,520</div>
        <div class="stat-meta"><span>Next payout Friday</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Open tickets</span><span class="icon-tile icon-tile-sm icon-tile-warning" aria-hidden="true"><span class="mdi mdi-lifebuoy"></span></span></div>
        <div class="stat-value">27</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+9</span><span>since yesterday</span></div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Failed payments</span><span class="icon-tile icon-tile-sm icon-tile-danger" aria-hidden="true"><span class="mdi mdi-credit-card-off-outline"></span></span></div>
        <div class="stat-value">14</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−6</span><span>this week</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="stat">
  <div class="stat-header">
    <span class="stat-label">Active members</span>
    <span class="icon-tile icon-tile-sm icon-tile-primary" aria-hidden="true">
      <span class="mdi mdi-account-group-outline"></span>
    </span>
  </div>
  <div class="stat-value">12,408</div>
  <div class="stat-meta">...</div>
</div>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({
  label: "Active members",
  value: "12,408",
  delta: "+4.1%",
  caption: "this week",
  icon: "mdi-account-group-outline",
  iconVariant: "primary"
});
Stat({
  label: "Payouts",
  value: "$86,520",
  caption: "Next payout Friday",
  icon: "mdi-bank-transfer-out",
  iconVariant: "success"
});
Stat({
  label: "Open tickets",
  value: 27,
  delta: "+9",
  invertTrend: true,
  caption: "since yesterday",
  icon: "mdi-lifebuoy",
  iconVariant: "warning"
});
Stat({
  label: "Failed payments",
  value: 14,
  delta: "−6",
  invertTrend: true,
  caption: "this week",
  icon: "mdi-credit-card-off-outline",
  iconVariant: "danger"
});
```

---

## Trends

The arrow shows the direction of the change; the color shows whether the change is good. `.stat-delta-up` is the "good" (green) style and `.stat-delta-down` the "bad" (red) style, whichever way the arrow points.

The string component infers the direction from the sign of `delta`: a leading `+` is up, `-` or `−` is down, and `0%`, `±…` or an unsigned value is neutral. Set `trend` to override it, and `trend: "neutral"` for a change that is neither good nor bad (no arrow, gray pill).

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Up, good</span></div>
        <div class="stat-value">$9,830</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+18%</span><span>weekly sales</span></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Down, bad</span></div>
        <div class="stat-value">1,204</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−7.5%</span><span>new sign-ups</span></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Neutral</span></div>
        <div class="stat-value">42<span class="stat-unit">%</span></div>
        <div class="stat-meta"><span class="stat-delta">±0%</span><span>mobile share</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+18%</span>
<span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−7.5%</span>
<span class="stat-delta">±0%</span>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({ label: "Up, good", value: "$9,830", delta: "+18%", caption: "weekly sales" });
Stat({ label: "Down, bad", value: "1,204", delta: "−7.5%", caption: "new sign-ups" });
Stat({ label: "Neutral", value: 42, unit: "%", delta: "±0%", trend: "neutral", caption: "mobile share" });
```

A delta without a sign, such as `"0%"` or `"3 pt"`, is treated as up. Pass `trend` explicitly when the value can be zero.

### When down is good

For latency, churn, refunds or error rates a decrease is an improvement. `invertTrend` keeps the arrow pointing the real way but swaps the colors.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">p95 latency</span><span class="icon-tile icon-tile-sm icon-tile-info" aria-hidden="true"><span class="mdi mdi-speedometer"></span></span></div>
        <div class="stat-value">182<span class="stat-unit">ms</span></div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−24ms</span><span>after the CDN switch</span></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Monthly churn</span><span class="icon-tile icon-tile-sm icon-tile-warning" aria-hidden="true"><span class="mdi mdi-account-arrow-right-outline"></span></span></div>
        <div class="stat-value">2.1<span class="stat-unit">%</span></div>
        <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+0.4 pt</span><span>vs Q3</span></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Refund rate</span><span class="icon-tile icon-tile-sm icon-tile-danger" aria-hidden="true"><span class="mdi mdi-cash-refund"></span></span></div>
        <div class="stat-value">0.8<span class="stat-unit">%</span></div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−0.2 pt</span><span>last 30 days</span></div>
      </div>
    </div>
  </div>
</div>
::end

```html
<!-- Latency went down: arrow down, green -->
<span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−24ms</span>

<!-- Churn went up: arrow up, red -->
<span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+0.4 pt</span>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({
  label: "p95 latency",
  value: 182,
  unit: "ms",
  delta: "−24ms",
  invertTrend: true,
  caption: "after the CDN switch",
  icon: "mdi-speedometer",
  iconVariant: "info"
});
Stat({
  label: "Monthly churn",
  value: "2.1",
  unit: "%",
  delta: "+0.4 pt",
  invertTrend: true,
  caption: "vs Q3",
  icon: "mdi-account-arrow-right-outline",
  iconVariant: "warning"
});
```

---

## Stat Group

`.stat-group` holds several stats in one bordered frame. It is a responsive grid (`auto-fit`, at least `11rem` per stat), so the stats wrap onto new rows on narrow screens and every cell keeps a hairline divider on its top and start edges.

::html
<div class="docs-preview">
  <div class="stat-group">
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Visitors</span></div>
      <div class="stat-value">82.4k</div>
      <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+6.1%</span></div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Bounce rate</span></div>
      <div class="stat-value">38.2<span class="stat-unit">%</span></div>
      <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−2.4 pt</span></div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Avg. session</span></div>
      <div class="stat-value">3m 12s</div>
      <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-down" aria-hidden="true"></span>−9s</span></div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Checkouts</span></div>
      <div class="stat-value">1,938</div>
      <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+11%</span></div>
    </div>
  </div>
</div>
::end

```html
<div class="stat-group">
  <div class="stat">
    <div class="stat-header"><span class="stat-label">Visitors</span></div>
    <div class="stat-value">82.4k</div>
    <div class="stat-meta">
      <span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+6.1%</span>
    </div>
  </div>
  <div class="stat">...</div>
  <div class="stat">...</div>
</div>
```

```js components
import { StatGroup } from "@abydahana/aksara-ui/components";

StatGroup({
  items: [
    { label: "Visitors", value: "82.4k", delta: "+6.1%" },
    { label: "Bounce rate", value: "38.2", unit: "%", delta: "−2.4 pt", invertTrend: true },
    { label: "Avg. session", value: "3m 12s", delta: "−9s" },
    { label: "Checkouts", value: "1,938", delta: "+11%" }
  ]
});
```

Stats inside a group keep their padding but lose their own border, radius and background. You do not need `.stat-plain` there.

---

## Plain Stats In A Card

`.stat-plain` removes the frame and padding so a stat can sit inside a card body next to other content, such as a header with a period switcher.

::html
<div class="docs-preview">
  <div class="card max-w-[640px]">
    <div class="card-header hstack justify-between gap-3">
      <span class="fw-semibold">Northwind Coffee · November</span>
      <button type="button" class="btn btn-ghost btn-sm">Last 30 days <span class="mdi mdi-chevron-down"></span></button>
    </div>
    <div class="card-body">
      <div class="row gap-4">
        <div class="col-12 md:col-4">
          <div class="stat stat-plain">
            <div class="stat-header"><span class="stat-label">Net sales</span></div>
            <div class="stat-value">$54,710</div>
            <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+9.3%</span><span>vs October</span></div>
          </div>
        </div>
        <div class="col-12 md:col-4">
          <div class="stat stat-plain">
            <div class="stat-header"><span class="stat-label">Cups sold</span></div>
            <div class="stat-value">2,316</div>
            <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+184</span><span>vs October</span></div>
          </div>
        </div>
        <div class="col-12 md:col-4">
          <div class="stat stat-plain">
            <div class="stat-header"><span class="stat-label">Repeat customers</span></div>
            <div class="stat-value">61<span class="stat-unit">%</span></div>
            <div class="stat-meta"><span class="stat-delta">±0 pt</span><span>steady</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="card">
  <div class="card-header hstack justify-between gap-3">...</div>
  <div class="card-body">
    <div class="row gap-4">
      <div class="col-12 md:col-4">
        <div class="stat stat-plain">
          <div class="stat-header"><span class="stat-label">Net sales</span></div>
          <div class="stat-value">$54,710</div>
          <div class="stat-meta">...</div>
        </div>
      </div>
      <!-- more columns -->
    </div>
  </div>
</div>
```

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({ label: "Net sales", value: "$54,710", delta: "+9.3%", caption: "vs October", plain: true });
Stat({
  label: "Repeat customers",
  value: 61,
  unit: "%",
  delta: "±0 pt",
  trend: "neutral",
  caption: "steady",
  plain: true
});
```

---

## With A Progress Bar Or Chart

Anything you pass as `children` renders after the meta row. A thin [progress](#/components/progress) bar works for quotas and goals; a row of bars built from utilities makes a small inline chart without a chart library.

::html
<div class="docs-preview">
  <div class="row gap-3">
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Storage used</span><span class="icon-tile icon-tile-sm icon-tile-info" aria-hidden="true"><span class="mdi mdi-database-outline"></span></span></div>
        <div class="stat-value">72<span class="stat-unit">/ 100 GB</span></div>
        <div class="progress progress-thin mt-2" role="progressbar" aria-label="Storage used" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar w-[72%]"></div></div>
        <div class="stat-meta"><span>Resets on 1 December</span></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Quarterly target</span></div>
        <div class="stat-value">$1.46M</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+14%</span><span>91% of $1.6M</span></div>
        <div class="progress progress-thin mt-2" role="progressbar" aria-label="Quarterly target" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-success w-[91%]"></div></div>
      </div>
    </div>
    <div class="col-12 md:col-4">
      <div class="stat h-full">
        <div class="stat-header"><span class="stat-label">Daily orders</span></div>
        <div class="stat-value">186</div>
        <div class="stat-meta"><span class="stat-delta stat-delta-up"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+22</span><span>vs last Friday</span></div>
        <div class="hstack items-end gap-1 h-[40px] mt-2" role="img" aria-label="Orders over the last 7 days: 120, 142, 98, 156, 131, 164, 186">
          <span class="flex-1 rounded-sm bg-subtle h-[64%]"></span>
          <span class="flex-1 rounded-sm bg-subtle h-[76%]"></span>
          <span class="flex-1 rounded-sm bg-subtle h-[53%]"></span>
          <span class="flex-1 rounded-sm bg-subtle h-[84%]"></span>
          <span class="flex-1 rounded-sm bg-subtle h-[70%]"></span>
          <span class="flex-1 rounded-sm bg-subtle h-[88%]"></span>
          <span class="flex-1 rounded-sm bg-primary h-full"></span>
        </div>
      </div>
    </div>
  </div>
</div>
::end

```html
<div class="stat">
  <div class="stat-header"><span class="stat-label">Storage used</span></div>
  <div class="stat-value">72<span class="stat-unit">/ 100 GB</span></div>
  <div
    class="progress progress-thin mt-2"
    role="progressbar"
    aria-label="Storage used"
    aria-valuenow="72"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar w-[72%]"></div>
  </div>
  <div class="stat-meta"><span>Resets on 1 December</span></div>
</div>

<div class="stat">
  ...
  <div
    class="hstack items-end gap-1 h-[40px] mt-2"
    role="img"
    aria-label="Orders over the last 7 days: 120, 142, 98, 156, 131, 164, 186"
  >
    <span class="flex-1 rounded-sm bg-subtle h-[64%]"></span>
    <span class="flex-1 rounded-sm bg-subtle h-[76%]"></span>
    <!-- ... -->
    <span class="flex-1 rounded-sm bg-primary h-full"></span>
  </div>
</div>
```

```js components
import { Stat, Progress } from "@abydahana/aksara-ui/components";

Stat({
  label: "Quarterly target",
  value: "$1.46M",
  delta: "+14%",
  caption: "91% of $1.6M",
  children: Progress({
    value: 91,
    variant: "success",
    className: "progress-thin mt-2",
    attributes: { "aria-label": "Quarterly target" }
  })
});

const days = [120, 142, 98, 156, 131, 164, 186];
const max = Math.max(...days);
const bars = days
  .map(
    (n, i) =>
      `<span class="flex-1 rounded-sm ${i === days.length - 1 ? "bg-primary" : "bg-subtle"} h-[${Math.round((n / max) * 100)}%]"></span>`
  )
  .join("");

Stat({
  label: "Daily orders",
  value: 186,
  delta: "+22",
  caption: "vs last Friday",
  children: `<div class="hstack items-end gap-1 h-[40px] mt-2" role="img" aria-label="Orders over the last 7 days: ${days.join(", ")}">${bars}</div>`
});
```

Bar heights like `h-[64%]` are arbitrary classes generated by `Aksara.init()` at runtime, so computed values work without a build step.

---

## Compact Values

Add `.stat-value-sm` to the value for dense layouts: side panels, table summaries, or a stat group with many cells.

::html
<div class="docs-preview">
  <div class="stat-group max-w-[640px]">
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Invoices sent</span></div>
      <div class="stat-value stat-value-sm">128</div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Paid</span></div>
      <div class="stat-value stat-value-sm">$214,300</div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Overdue</span></div>
      <div class="stat-value stat-value-sm">$18,420</div>
      <div class="stat-meta"><span class="stat-delta stat-delta-down"><span class="mdi mdi-arrow-up" aria-hidden="true"></span>+3</span><span>invoices</span></div>
    </div>
    <div class="stat">
      <div class="stat-header"><span class="stat-label">Avg. days to pay</span></div>
      <div class="stat-value stat-value-sm">11<span class="stat-unit">days</span></div>
    </div>
  </div>
</div>
::end

```html
<div class="stat">
  <div class="stat-header"><span class="stat-label">Invoices sent</span></div>
  <div class="stat-value stat-value-sm">128</div>
</div>
```

With the string component, pass `size: "sm"`:

```js components
import { Stat } from "@abydahana/aksara-ui/components";

Stat({ label: "Invoices sent", value: 128, size: "sm" });
```

---

## Accessibility

- The delta pairs color with an arrow icon and a sign, so the meaning does not depend on color alone. Keep the sign in the delta text (`+12%`, `−24ms`): the arrow is `aria-hidden`.
- Write captions that say what the delta is compared with ("vs last month"). A bare `+12%` is hard to interpret when read out of context.
- Values are plain text and update freely. If a stat refreshes live, put `aria-live="polite"` on the `.stat-value` (or on a wrapper of the whole row) so changes are announced.
- Give inline charts a `role="img"` with an `aria-label` that lists the values, as in the daily orders example.

---

## String Component

`Stat` renders the full block. `label`, `value`, `unit`, `delta` and `caption` are escaped; `children` is raw HTML placed after the meta row. `StatGroup` renders `.stat-group` from an `items` array of `Stat` props and/or raw `children`.

```ts
import { Stat, StatGroup } from "@abydahana/aksara-ui/components";

Stat({ label: "Revenue", value: "$48,240", delta: "+12.4%", caption: "vs last month" });
Stat({ label: "p95 latency", value: 182, unit: "ms", delta: "−24ms", invertTrend: true });
Stat({ label: "Open tickets", value: 27, icon: "mdi-lifebuoy", iconVariant: "warning", plain: true });

StatGroup({
  items: [
    { label: "Visitors", value: "82.4k", delta: "+6.1%" },
    { label: "Checkouts", value: "1,938", delta: "+11%" }
  ]
});
```

### Stat

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>label</code></td><td><code>string</code></td><td>—</td><td>What the number is. Required.</td></tr>
      <tr><td><code>value</code></td><td><code>string | number</code></td><td>—</td><td>The main figure. Format it yourself (<code>"$48,240"</code>, <code>"4,812"</code>). Required.</td></tr>
      <tr><td><code>unit</code></td><td><code>string</code></td><td>—</td><td>Small text after the value, in <code>.stat-unit</code>.</td></tr>
      <tr><td><code>delta</code></td><td><code>string</code></td><td>—</td><td>Change vs. the previous period, rendered in <code>.stat-delta</code>.</td></tr>
      <tr><td><code>trend</code></td><td><code>"up" | "down" | "neutral"</code></td><td>inferred</td><td>Direction of <code>delta</code>. Without it: a leading <code>+</code> means up, <code>-</code> / <code>−</code> down, and zero, <code>±</code> or unsigned values (or no <code>delta</code>) neutral.</td></tr>
      <tr><td><code>invertTrend</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Down is good: a down delta gets <code>.stat-delta-up</code> (green), an up delta <code>.stat-delta-down</code> (red). The arrow still follows <code>trend</code>.</td></tr>
      <tr><td><code>caption</code></td><td><code>string</code></td><td>—</td><td>Text after the delta, such as <code>"vs last month"</code>.</td></tr>
      <tr><td><code>icon</code></td><td><code>string</code></td><td>—</td><td>Icon class shown in an <code>.icon-tile-sm</code> at the end of the header.</td></tr>
      <tr><td><code>iconVariant</code></td><td><code>string</code></td><td>—</td><td>Palette color of the icon tile (<code>.icon-tile-{iconVariant}</code>). Neutral when omitted.</td></tr>
      <tr><td><code>plain</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Adds <code>.stat-plain</code>: no border, background or padding.</td></tr>
      <tr><td><code>size</code></td><td><code>"sm" | "md"</code></td><td><code>"md"</code></td><td><code>"sm"</code> adds <code>.stat-value-sm</code> (1.25rem value).</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Raw HTML after the meta row (progress bar, chart).</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.stat</code>.</td></tr>
      <tr><td><code>attributes</code></td><td><code>Record&lt;string, unknown&gt;</code></td><td>—</td><td>Extra HTML attributes on <code>.stat</code>.</td></tr>
    </tbody>
  </table>
</div>
::end

### StatGroup

::html
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>items</code></td><td><code>StatProps[]</code></td><td><code>[]</code></td><td>Stats rendered with <code>Stat()</code>, in order.</td></tr>
      <tr><td><code>children</code></td><td><code>string</code></td><td><code>""</code></td><td>Raw HTML appended after the items, for example pre-rendered <code>Stat()</code> strings.</td></tr>
      <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Extra classes on <code>.stat-group</code>.</td></tr>
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
      <tr><th>Class</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>.stat</code></td><td>Flex column with <code>1.25rem</code> padding, subtle border, large radius and surface background.</td></tr>
      <tr><td><code>.stat-plain</code></td><td>Removes padding, border and background.</td></tr>
      <tr><td><code>.stat-header</code></td><td>Row with the label at the start and an optional icon tile at the end.</td></tr>
      <tr><td><code>.stat-label</code></td><td><code>.8125rem</code> medium subtle text.</td></tr>
      <tr><td><code>.stat-value</code></td><td><code>1.75rem</code> bold value with tabular numbers and tight letter spacing.</td></tr>
      <tr><td><code>.stat-value-sm</code></td><td>Value at <code>1.25rem</code>.</td></tr>
      <tr><td><code>.stat-unit</code></td><td><code>.875rem</code> subtle unit text inside the value.</td></tr>
      <tr><td><code>.stat-meta</code></td><td>Wrapping row for the delta and caption, <code>.8125rem</code> subtle text.</td></tr>
      <tr><td><code>.stat-delta</code></td><td>Neutral pill for the change value.</td></tr>
      <tr><td><code>.stat-delta-up</code></td><td>Good change: success tint and text.</td></tr>
      <tr><td><code>.stat-delta-down</code></td><td>Bad change: danger tint and text.</td></tr>
      <tr><td><code>.stat-group</code></td><td>Bordered responsive grid (min <code>11rem</code> per cell) with hairlines between the stats inside it.</td></tr>
    </tbody>
  </table>
</div>
::end
