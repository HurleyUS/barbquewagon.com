# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 3223 |
| Avg Cyclomatic | 1.6 |
| P90 Cyclomatic | 3 |
| Dead Files | 0.0% |
| Dead Exports | 0.0% |
| Maintainability (avg) | 96.2 |
| Circular Deps | 0 |
| Unused Deps | 0 |

## Fallow: 1 high complexity function

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `scripts/ship.mts:23` | `run` | high | 7 | 6 | 56.0 **!** | 17 |

**34** files, **95** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT

Comparing against baseline: /Users/michael/Projects/barbquewagon.com/.fallow/baselines/dead-code.json
Comparing against duplication baseline: /Users/michael/Projects/barbquewagon.com/.fallow/baselines/dupes.json
Warning: duplication baseline has 8 entries but matched 0 current clone groups. Your paths may have changed, or the baseline was saved on a different machine. Re-save with: --save-baseline /Users/michael/Projects/barbquewagon.com/.fallow/baselines/dupes.json
Comparing against health baseline: /Users/michael/Projects/barbquewagon.com/.fallow/baselines/health.json

Audit scope: 11 changed files vs main (7dc1e40..HEAD)
✓ No issues in 11 changed files (0.26s)


## DEAD

## Fallow: no issues found



## DUPLICATION

## Fallow: 8 clone groups found (9.1% duplication)

### Duplicates

**Clone group 1** (21 lines, 2 instances)

- `app/api/catering/route.ts:4-24`
- `app/api/contact/route.ts:4-22`

**Clone group 2** (29 lines, 2 instances)

- `app/catering/catering-form.tsx:1-29`
- `app/contact/contact-form.tsx:1-27`

**Clone group 3** (11 lines, 2 instances)

- `app/catering/catering-form.tsx:113-123`
- `app/contact/contact-form.tsx:103-113`

**Clone group 4** (11 lines, 2 instances)

- `app/catering/catering-form.tsx:125-135`
- `app/catering/catering-form.tsx:144-153`

**Clone group 5** (16 lines, 2 instances)

- `app/catering/catering-form.tsx:129-144`
- `app/contact/contact-form.tsx:119-134`

**Clone group 6** (26 lines, 2 instances)

- `app/catering/catering-form.tsx:147-172`
- `app/contact/contact-form.tsx:137-162`

**Clone group 7** (11 lines, 2 instances)

- `app/contact/contact-form.tsx:115-125`
- `app/contact/contact-form.tsx:134-143`

**Clone group 8** (21 lines, 2 instances)

- `app/contact/page.tsx:52-72`
- `app/menu/page.tsx:219-239`

### Clone Families

**Family 1** (1 group, 21 lines across `app/api/catering/route.ts`, `app/api/contact/route.ts`)

- Extract shared function (21 lines) from route.ts, route.ts (~21 lines saved)

**Family 2** (1 group, 11 lines across `app/catering/catering-form.tsx`)

- Extract shared function (11 lines) from catering-form.tsx, catering-form.tsx (~11 lines saved)

**Family 3** (4 groups, 82 lines across `app/catering/catering-form.tsx`, `app/contact/contact-form.tsx`)

- Extract 4 shared clone groups (82 lines) from catering-form.tsx, contact-form.tsx into a shared directory (~82 lines saved)

**Family 4** (1 group, 11 lines across `app/contact/contact-form.tsx`)

- Extract shared function (11 lines) from contact-form.tsx, contact-form.tsx (~11 lines saved)

**Family 5** (1 group, 21 lines across `app/contact/page.tsx`, `app/menu/page.tsx`)

- Extract shared function (21 lines) from page.tsx, page.tsx (~21 lines saved)

**Summary:** 256 duplicated lines (9.1%) across 6 files



## DOCSTRINGS

✔︎ 100% docstring coverage

