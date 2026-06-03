# Graph Report - khana-book-pos  (2026-06-03)

## Corpus Check
- 10 files · ~324,167 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 49 nodes · 52 edges · 12 communities (6 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3d6fd03d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `navigateTo()` - 3 edges
2. `handleHashChange()` - 3 edges
3. `applyTheme()` - 2 edges
4. `toggleTheme()` - 2 edges
5. `setActiveNavLink()` - 2 edges
6. `parseLocation()` - 2 edges
7. `routes` - 1 edges
8. `routeMetadata` - 1 edges
9. `globalState` - 1 edges
10. `blogCleanups` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (12 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.18
Nodes (3): globalState, routeMetadata, routes

### Community 1 - "Community 1"
Cohesion: 0.50
Nodes (4): handleHashChange(), navigateTo(), parseLocation(), setActiveNavLink()

## Knowledge Gaps
- **8 isolated node(s):** `routes`, `routeMetadata`, `globalState`, `blogCleanups`, `getStartedCleanups` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `navigateTo()` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._
- **Why does `handleHashChange()` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._
- **What connects `routes`, `routeMetadata`, `globalState` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._