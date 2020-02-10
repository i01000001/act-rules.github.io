---
id: b40fd1
name: HTML page has a main landmark
rule_type: atomic
description: |
  This rule checks that each page has an element with a semantic role of `main`
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

Within the test target, there is at least on element which:

- has [semantic role][] of `main`; and
- is [included in the accessibility tree][].

**Note:** Authors SHOULD not use more than one element with a [semantic role][] of `main`. This is, however, a not a requirement for this rule and can be valid in certain cases.

**Note:** Technique [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] does not require the use of landmarks, nor the use of a main one. It only requires that if landmarks are used they identify the correct [section of content][]. Hence it is not listed as an accessibility requirement for this rule. However, having a landmark to identify the primary content of a page is enough to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241].

## Assumptions

- This rule assumes that the main landmark is correctly used to identify the primary content of the page.
- This rule assume that landmarks are intended to users of Assistive Technologies and are not necessarily rendered in a visible way. Therefore, it does not require the main landmark to be [visible][]. Similarly, technique [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] does not require landmarks to be [visible][] or have [visible][] content.

## Accessibility Support

Having a `main` landmark is sufficient to pass [Success Criterion 2.4.1: Bypass blocks][sc241] by identifying the main content of a page. However, this will only benefit users who can actually navigate using landmark roles (such a functionality is usually provided by assistive technologies, but could also be provided by browsers or browsers plugins). Users without any possibility for landmark navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.

## Background

- [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
- [CSS scoping (work in progress)](https://drafts.csswg.org/css-scoping/)
- [The `main` role](https://www.w3.org/TR/wai-aria-1.1/#main)

## Test Cases

**Note:** Unless specified otherwise, the text of examples is from the translation of the first Chapter of _The Three Kingdoms_ by Yu Sumei (Tuttle publishing, May 2014).

### Passed

#### Passed Example 1

This [document][] has a one element with a [semantic role][] of `main`.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main>
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

#### Passed Example 2

This [document][] has several elements with a role of `main`, at least one of them is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title>
	</head>
	<body>
		<div role="main" aria-label="Translation by C. H. Brewitt-Taylor (1925)" aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood in the Peach Garden</h1>
			The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
			divide.
		</div>

		<div role="main" aria-label="Translation by Moss Roberts (1976)">
			<h1>Three Bold Spirits Plight Mutual Faith in the Peach Garden</h1>
			The empire, long divided, must unite; long united, must divide. Thus it has ever been.
		</div>

		<div role="main" aria-label="Translation by Yu Sumei (2014)" aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no element with a role of `main`.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
		Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
		time.
	</body>
</html>
```

#### Failed Example 2

The `main` landmark is not [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<main aria-hidden="true">
			<h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</main>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition of descendant'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[html web page]: #web-page-html 'Definition of web page (HTML)'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1: Bypass blocks'
[section of content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[tech aria11]: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11
[visible]: #visible 'Definition of visible'