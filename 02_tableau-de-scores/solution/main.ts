// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type player = { name: string; score: number };
type scoreboard = { created: Date; players: player[] };

function newScoreboard(): scoreboard {
    const now = new Date();
    return { created: now, players: [] };
}

function addPlayer(sb: scoreboard, name: string, score: number): scoreboard {
    const p = { name, score };
    return { created: sb.created, players: sb.players.concat([p]) };
}

test("should add a player to the scoreboard", () => {
    const actual = addPlayer(newScoreboard(), "bob", 1).players;
    const expected = [{ name: "bob", score: 1 }];
    expect(actual).toBe(expected);
});

function removePlayer(sb: scoreboard, name: string): scoreboard {
    const updatedPlayers: player[] = [];
    for (const p of sb.players) {
        if (p.name === name) continue;
        updatedPlayers.push(p);
    }
    return { created: sb.created, players: updatedPlayers };
}

test("should remove a player to the scoreboard", () => {
    const sb = addPlayer(newScoreboard(), "bob", 1);
    const actual = removePlayer(sb, "bob").players;
    const expected: player[] = [];
    expect(actual).toBe(expected);
});

function updateScore(sb: scoreboard, name: string, score: number): scoreboard {
    let newSb = newScoreboard();
    newSb.created = new Date(sb.created); // pour garder la date originale
    for (const p of sb.players) {
        if (p.name === name) {
            newSb = addPlayer(newSb, p.name, score);
            continue;
        }
        newSb = addPlayer(newSb, p.name, p.score);
    }
    return newSb;
}

test("should update a player's score", () => {
    const sb = addPlayer(newScoreboard(), "bob", 1);
    const actual = updateScore(sb, "bob", 2).players;
    const expected = addPlayer(newScoreboard(), "bob", 2).players;
    expect(actual).toBe(expected);
});

test("should not update the original scoreboard", () => {
    const sb = addPlayer(newScoreboard(), "bob", 1);
    updateScore(sb, "bob", 2);
    const actual = sb.players;
    const expected = addPlayer(newScoreboard(), "bob", 1).players;
    expect(actual).toBe(expected);
});

function applyMondayBonus(sb: scoreboard): scoreboard {
    const monday = 1;
    if (sb.created.getDay() !== monday) return sb;

    const bonus = 100;
    let newSb = newScoreboard();
    newSb.created = new Date(sb.created); // pour garder la date originale
    for (const p of sb.players) {
        newSb = addPlayer(newSb, p.name, p.score + bonus);
    }
    return newSb;
}

type stats = {
    minimum: number;
    maximum: number;
    average: number;
};

function getStats(sb: scoreboard): stats {
    return {
        minimum: calcMinScore(sb),
        maximum: calcMaxScore(sb),
        average: calcAvgScore(sb),
    };
}

function calcMinScore(sb: scoreboard): number {
    let min = sb.players.length ? sb.players[0].score : 0;
    for (const p of sb.players) {
        if (p.score > min) continue;
        min = p.score;
    }
    return min;
}

test("should calculate the minimum score", () => {
    const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
    const actual = calcMinScore(sb);
    const expected = 1;
    expect(actual).toBe(expected);
});

function calcMaxScore(sb: scoreboard): number {
    let max = 0;
    for (const p of sb.players) {
        if (p.score < max) continue;
        max = p.score;
    }
    return max;
}

test("should calculate the maximum score", () => {
    const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
    const actual = calcMaxScore(sb);
    const expected = 3;
    expect(actual).toBe(expected);
});

function calcAvgScore(sb: scoreboard): number {
    let sum = 0;
    for (const p of sb.players) sum += p.score;
    return sum / sb.players.length;
}

test("should calculate the average score", () => {
    const sb = addPlayer(addPlayer(newScoreboard(), "bob", 1), "bobette", 3);
    const actual = calcAvgScore(sb);
    const expected = 2;
    expect(actual).toBe(expected);
});
