# 📊 How to Update Your Stats

## Auto-Updating (No Action Needed) ✅

These update automatically when visitors load your portfolio:

### GitHub Stats
- ✅ **Contribution Graph** - Updates in real-time
- ✅ **Repository Count** - Auto-synced
- ✅ **Stars Earned** - Auto-synced
- ✅ **Total Commits** - Auto-synced
- ✅ **Contribution Streak** - Auto-synced

**How it works**: The images fetch data directly from GitHub's API every time someone visits your page.

---

## Manual Updates (You Need to Edit) ❌

These require you to manually update the numbers:

### LeetCode Stats
**Location**: `src/data/portfolio-data.ts`

```typescript
{
  platform: 'LeetCode',
  username: 'vishwas_singh22',
  url: 'https://leetcode.com/vishwas_singh22',
  problemsSolved: 150,  // ← Update this number
  rating: '1500',        // ← Update this number
  rank: 'Knight',        // ← Update this rank
  icon: 'fas fa-code',
  color: '#FFA116',
}
```

**When to update**:
- After solving more problems
- When your rating changes
- When your rank changes

### GeeksforGeeks Stats
**Location**: `src/data/portfolio-data.ts`

```typescript
{
  platform: 'GeeksforGeeks',
  username: 'vishwassingh',
  url: 'https://auth.geeksforgeeks.org/user/vishwassingh',
  problemsSolved: 200,  // ← Update this number
  rank: 'Institute Rank 20',  // ← Update this rank
  icon: 'fas fa-laptop-code',
  color: '#2F8D46',
}
```

---

## How to Update Manual Stats

### Step 1: Edit the File
1. Open `src/data/portfolio-data.ts`
2. Find the `codingProfiles` section
3. Update the numbers

### Step 2: Save and Push
```bash
git add src/data/portfolio-data.ts
git commit -m "Updated coding stats"
git push
```

### Step 3: Wait for Deployment
- Vercel will automatically rebuild (2-3 minutes)
- Your updated stats will be live!

---

## Other Manual Updates

### Projects
**Location**: `src/data/portfolio-data.ts` → `projects` array

Update when you:
- Complete new projects
- Update project descriptions
- Change project links

### Skills
**Location**: `src/data/portfolio-data.ts` → `skills` array

Update when you:
- Learn new technologies
- Improve proficiency levels
- Add new skill categories

### About/Bio
**Location**: `src/data/portfolio-data.ts` → `about.bio` array

Update when you:
- Want to change your introduction
- Add new achievements
- Update your focus areas

---

## Quick Reference

| Feature | Auto-Updates? | How to Update |
|---------|---------------|---------------|
| GitHub Contributions | ✅ Yes | Automatic |
| GitHub Stats | ✅ Yes | Automatic |
| GitHub Repos | ✅ Yes | Automatic |
| LeetCode Stats | ❌ No | Edit `portfolio-data.ts` |
| GeeksforGeeks Stats | ❌ No | Edit `portfolio-data.ts` |
| Projects | ❌ No | Edit `portfolio-data.ts` |
| Skills | ❌ No | Edit `portfolio-data.ts` |
| Bio | ❌ No | Edit `portfolio-data.ts` |

---

## 💡 Pro Tip

Set a reminder to update your LeetCode and GeeksforGeeks stats:
- Weekly (if you solve problems regularly)
- Monthly (for occasional updates)
- Before job applications (to show latest progress)

---

## Why Doesn't LeetCode Auto-Update?

Unlike GitHub, LeetCode doesn't provide a public API that allows external websites to fetch your stats automatically. You need to manually update the numbers in your code.

**GitHub** = Public API ✅  
**LeetCode** = No public API ❌  
**GeeksforGeeks** = No public API ❌
