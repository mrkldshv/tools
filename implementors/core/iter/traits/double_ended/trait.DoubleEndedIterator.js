(function() {var implementors = {};
implementors["rome_rowan"] = [{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.SyntaxTriviaPiecesIterator.html\" title=\"struct rome_rowan::syntax::SyntaxTriviaPiecesIterator\">SyntaxTriviaPiecesIterator</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::trivia::SyntaxTriviaPiecesIterator"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstNodeListIterator.html\" title=\"struct rome_rowan::AstNodeListIterator\">AstNodeListIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstNodeListIterator"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatorIterator.html\" title=\"struct rome_rowan::AstSeparatorIterator\">AstSeparatorIterator</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;,&nbsp;</span>","synthetic":false,"types":["rome_rowan::ast::AstSeparatorIterator"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatedListElementsIterator.html\" title=\"struct rome_rowan::AstSeparatedListElementsIterator\">AstSeparatedListElementsIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstSeparatedListElementsIterator"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatedListNodesIterator.html\" title=\"struct rome_rowan::AstSeparatedListNodesIterator\">AstSeparatedListNodesIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstSeparatedListNodesIterator"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.SyntaxKind.html\" title=\"trait rome_rowan::syntax::SyntaxKind\">SyntaxKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.ParsedChildrenIntoIterator.html\" title=\"struct rome_rowan::ParsedChildrenIntoIterator\">ParsedChildrenIntoIterator</a>&lt;'a, K&gt;","synthetic":false,"types":["rome_rowan::syntax_factory::parsed_children::ParsedChildrenIntoIterator"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.SyntaxKind.html\" title=\"trait rome_rowan::syntax::SyntaxKind\">SyntaxKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.ParsedChildrenIterator.html\" title=\"struct rome_rowan::ParsedChildrenIterator\">ParsedChildrenIterator</a>&lt;'a, K&gt;","synthetic":false,"types":["rome_rowan::syntax_factory::parsed_children::ParsedChildrenIterator"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()