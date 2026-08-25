"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const skills = [
  { subject: "推荐系统", value: 95 },
  { subject: "运筹优化", value: 90 },
  { subject: "大模型/Agent", value: 88 },
  { subject: "算法创新", value: 90 },
  { subject: "全栈开发", value: 85 },
  { subject: "产品思维", value: 80 },
  { subject: "商业洞察", value: 78 },
];

export function SkillRadar() {
  return (
    <div className="w-full max-w-md mx-auto aspect-square">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skills} cx="50%" cy="50%" outerRadius="60%">
          <PolarGrid
            stroke="currentColor"
            strokeOpacity={0.1}
            gridType="polygon"
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: "currentColor",
              fontSize: 12,
              className: "text-muted-foreground",
            }}
          />
          <Radar
            name="能力"
            dataKey="value"
            stroke="hsl(250, 80%, 60%)"
            fill="hsl(250, 80%, 60%)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
