import { z } from "zod";

const Map = z.object({
  name: z.string(),
  id: z.string(),
});

export type Map = z.infer<typeof Map>;

const MapSelection = z.object({
  type: z.string(),
  maps: z.array(Map),
});

export type MapSelection = z.infer<typeof MapSelection>;

const EventType = z
  .literal("SCRIM")
  .or(z.literal("LEAGUE"))
  .or(z.literal("TOURNAMENT"));

export type EventType = z.infer<typeof EventType>;

const Event = z.object({
  id: z.string().uuid(),
  type: EventType,
  starts_at: z.string(),
  ends_at: z.string(),
  map_selection: MapSelection,
  points_required_to_participate: z.number(),
});

export type Event = z.infer<typeof Event>;

const ScheduledEvent = z.object({
  event_id: z.string(),
  starts_at: z.string(),
  ends_at: z.string(),
  conference: z.string(),
});

export type ScheduledEvent = z.infer<typeof ScheduledEvent>;

const PremierSeason = z.object({
  id: z.string().uuid(),
  championship_event_id: z.string().uuid(),
  championship_points_required: z.number(),
  starts_at: z.string(),
  ends_at: z.string(),
  enrollment_starts_at: z.string(),
  enrollment_ends_at: z.string(),
  events: z.array(Event),
  scheduled_events: z.array(ScheduledEvent),
});

export type PremierSeason = z.infer<typeof PremierSeason>;

const HenrikPremierSeasonResponse = z.object({
  status: z.number(),
  data: z.array(PremierSeason),
});

export const data = HenrikPremierSeasonResponse.parse(
  JSON.parse(`{
  "status": 200,
  "data": [
    {
      "id": "0ce57071-425f-4b65-4ac2-ffb31dc77b3f",
      "championship_event_id": "ecde8c1f-4cb2-0fda-f96c-f0a59c313541",
      "championship_points_required": 675,
      "starts_at": "2023-08-29T13:00:00Z",
      "ends_at": "2023-10-31T13:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "67b52368-455b-546e-fa62-4d9af20b9bf8",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "304f5118-47b0-20d3-d84b-9ab1e24bfd40",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "b82db3b9-487c-d215-641a-cf92575ec37f",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "5283d0bd-4478-6373-60df-bb86148cd792",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "93a3481e-45e5-cac5-d45f-eaa7054bba11",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f6c6a7a8-45af-b01d-2780-49aba9b73961",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "030f95bb-4c88-1a33-f6f8-cdb74bd42870",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a390b7f2-4f7a-b4c3-16b0-efb05cd277ef",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a81438b1-45d9-12bc-2646-4f857c6d9535",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a4d8c733-49b4-51a7-676b-6d80ada88624",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "d6bad209-4600-2bce-ca91-288502912f8b",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f9d7568d-4139-80d8-3263-9e84c9202e54",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "82bef65c-4c98-e7c8-1519-638c192b0329",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "4842103b-46ff-095e-841c-698a8c57f318",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "28f19877-43bf-83ff-c25f-3581218e970e",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "59b62fb0-485d-2343-2ff3-0493cf28f79c",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "36a2b768-4a90-6e83-39f1-77b0caa68e4c",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "fb15833e-4221-baee-5fae-57b50f78839d",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "13a09232-456b-732d-4399-6aa45c646b2c",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "7128744f-4c22-c3b8-d07a-b8a78db4a1a1",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "ecde8c1f-4cb2-0fda-f96c-f0a59c313541",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              },
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 675
        }
      ],
      "scheduled_events": []
    },
    {
      "id": "999a10b9-42ff-dc53-4f1a-c9a2787769b6",
      "championship_event_id": "21d6642b-4122-9fb5-d607-2688009653c0",
      "championship_points_required": 600,
      "starts_at": "2023-10-31T13:00:00Z",
      "ends_at": "2024-01-09T14:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "a59e9a3e-46fc-cf30-1eed-e8977aa41e11",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "ba88adf5-4c4c-6b36-95ad-4e890b9a06bb",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "ff4db319-47cf-a7c2-b935-f180af37f7a9",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "b1151b49-487d-8bcc-6d13-1290a98b76eb",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "52c3f1ed-4bb6-1598-9462-9e82bd603f67",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "2b588aa3-451d-f272-dbe0-9b8ce36b76be",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "5958a72b-4a4e-9ad4-262e-77829f5a6642",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "404e373a-47c3-c722-25dc-95a5a6a26c27",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "dd77ac1f-4153-6d8f-d103-a99433f76d35",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "7c4a0e73-4b9b-f1d3-af5c-da8228e9cfb5",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "6cb7f600-4219-c884-9f9e-a383f712b78e",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f8566214-412a-9b97-cd26-d9a005a66759",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f3fd4050-4bb3-d3a4-5447-1d988924fd1a",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "9c9effc8-404a-42dd-abeb-e7bbb3b7676b",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "21d6642b-4122-9fb5-d607-2688009653c0",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              },
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 600
        }
      ],
      "scheduled_events": []
    },
    {
      "id": "a1c4f86c-49fa-97bd-019b-aa8754ca7a83",
      "championship_event_id": "e9264821-4bdf-7b9a-3b61-6ca9f9b1f48d",
      "championship_points_required": 675,
      "starts_at": "2024-01-09T13:00:00Z",
      "ends_at": "2024-03-05T14:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "c5d0b169-45bb-55f5-2d4d-0590438eae2a",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "1abead84-40aa-5a43-03c1-23acef30b1db",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "cad0f83b-4991-7e1a-0b5b-0f833bdf7a0d",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "b128d833-480e-b85e-6775-df9b55dc7627",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "e8c4453b-4f03-a957-a22f-488a9035e05b",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "16f05fab-4eea-4456-e44d-db87df36abf7",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "816aa85b-45c5-50ac-bf2a-a398c9cff6bc",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "7c34dcc8-49aa-6872-8d5a-359a9ddd52da",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "8b18141d-449f-c8f1-d474-2abe55c37259",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "496156be-4222-4fda-ab48-c9abd0083ac2",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "cf430c4c-48bf-77d2-d33a-46b2664c1267",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "3e11615c-4904-bebf-676a-429a26175654",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "77d1cb08-4220-233a-8d7f-e281ee50b9c7",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "4f0aa027-4bfc-76a3-0ea9-9dbc6226e226",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "e9264821-4bdf-7b9a-3b61-6ca9f9b1f48d",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              },
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 675
        }
      ],
      "scheduled_events": []
    },
    {
      "id": "87bb58e8-44ea-28da-fb47-0ea7a91d769e",
      "championship_event_id": "1a9e9947-41d8-78a1-7b93-8499bcff70c0",
      "championship_points_required": 675,
      "starts_at": "2024-03-06T04:00:00Z",
      "ends_at": "2024-05-01T03:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "c1bb8eaf-4d61-ce5c-32e8-ccb31fc40ca8",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "1804d60d-4636-9a90-6777-488642fdb257",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "b156c65a-4431-7f94-9077-0ba93a2b487d",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "4b31e992-475c-b932-a713-7aa00276d16f",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f082799e-4238-0d2a-cda1-8391d9c058b5",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "cd27a226-498d-ea9a-75f0-4eb7a71c2ff8",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a9ff47ee-4f8f-b221-452b-bbbf985294e6",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "8bba4b0a-41c1-13f1-fb23-1aac69af2870",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "5af6580f-4235-a0ac-49e4-bc9598edf439",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "d6645f85-415b-069c-3534-11974edb4782",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "550b6533-4a9a-74c6-5949-78adc18ddef5",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "7d67ee6f-4a71-abf4-207a-70892404ed03",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "011e6544-49a6-d514-65ac-74a59f26d30e",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "2fa3fc66-4cf1-fb28-1a71-a795bcfae7c4",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "1a9e9947-41d8-78a1-7b93-8499bcff70c0",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              },
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 675
        }
      ],
      "scheduled_events": []
    },
    {
      "id": "ecf387b5-42d8-655e-db2e-58a1dd71ee64",
      "championship_event_id": "c7c69687-4bad-0b35-b312-f293c6211f5d",
      "championship_points_required": 600,
      "starts_at": "2024-05-01T03:00:00Z",
      "ends_at": "2024-06-27T03:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "87e765e7-4bbe-23c4-98c3-32809c095efc",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "b3a2391f-4758-545d-ea8c-74a39b8d5ca5",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "fc9b8444-4d24-6387-b5c1-09a44bf9100c",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "fea1bf8e-4f44-023a-1c18-11be9c15ca57",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "731e8bc1-4cd2-db00-7a5b-59bb9c4f283c",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "e1a3bb64-42c5-a657-ccb9-cfb7b15d28ec",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a8fe7c7f-4043-755c-0b83-1cb84b3d8c1c",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "89d78f10-4652-3670-646d-d8a75404594f",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "dc1895a2-44e9-1d50-f206-d2b135e20cfb",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "ffb70392-4dea-8fbf-d5b4-16b436f5123c",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "6c4bf089-4181-8b54-083e-9fb2832303aa",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "88a72980-496c-e801-0c45-faa29550239f",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "84204593-4e64-0289-8393-1484a610cfbe",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "312fa28c-404e-62f8-f7ce-0787c37c40d7",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "c7c69687-4bad-0b35-b312-f293c6211f5d",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              },
              {
                "name": "Breeze",
                "id": "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Split",
                "id": "d960549e-485c-e861-8d71-aa9d1aed12a2"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 600
        }
      ],
      "scheduled_events": []
    },
    {
      "id": "bbd57f53-411f-08af-99a0-e1ab9f6f2e81",
      "championship_event_id": "529ca58d-4603-108b-5771-72ab345d1847",
      "championship_points_required": 600,
      "starts_at": "2024-06-27T03:00:00Z",
      "ends_at": "2024-08-29T03:00:00Z",
      "enrollment_starts_at": "0001-01-01T00:00:00Z",
      "enrollment_ends_at": "0001-01-01T00:00:00Z",
      "events": [
        {
          "id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Abyss",
                "id": "224b0a95-48b9-f703-1bd8-67aca101a61f"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Abyss",
                "id": "224b0a95-48b9-f703-1bd8-67aca101a61f"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "type": "SCRIM",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "type": "LEAGUE",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "RANDOM",
            "maps": [
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              }
            ]
          },
          "points_required_to_participate": 0
        },
        {
          "id": "529ca58d-4603-108b-5771-72ab345d1847",
          "type": "TOURNAMENT",
          "starts_at": "0001-01-01T00:00:00Z",
          "ends_at": "0001-01-01T00:00:00Z",
          "conference_schedules": [],
          "map_selection": {
            "type": "PICKBAN",
            "maps": [
              {
                "name": "Abyss",
                "id": "224b0a95-48b9-f703-1bd8-67aca101a61f"
              },
              {
                "name": "Bind",
                "id": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba"
              },
              {
                "name": "Ascent",
                "id": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319"
              },
              {
                "name": "Icebox",
                "id": "e2ad5c54-4114-a870-9641-8ea21279579a"
              },
              {
                "name": "Lotus",
                "id": "2fe4ed3a-450a-948b-6d6b-e89a78e680a9"
              },
              {
                "name": "Haven",
                "id": "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047"
              },
              {
                "name": "Sunset",
                "id": "92584fbe-486a-b1b2-9faa-39b0f486b498"
              }
            ]
          },
          "points_required_to_participate": 600
        }
      ],
      "scheduled_events": [
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T16:00:00Z",
          "ends_at": "2024-06-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T17:00:00Z",
          "ends_at": "2024-06-27T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-27T18:00:00Z",
          "ends_at": "2024-06-27T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T16:00:00Z",
          "ends_at": "2024-06-28T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T17:00:00Z",
          "ends_at": "2024-06-28T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T18:00:00Z",
          "ends_at": "2024-06-28T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "109a7f10-4a7d-3a75-1d8d-4c9b7bd0b960",
          "starts_at": "2024-06-28T19:00:00Z",
          "ends_at": "2024-06-28T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T16:00:00Z",
          "ends_at": "2024-06-29T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T17:00:00Z",
          "ends_at": "2024-06-29T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T18:00:00Z",
          "ends_at": "2024-06-29T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T19:00:00Z",
          "ends_at": "2024-06-29T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T20:00:00Z",
          "ends_at": "2024-06-29T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-29T20:00:00Z",
          "ends_at": "2024-06-29T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T16:00:00Z",
          "ends_at": "2024-06-30T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T16:00:00Z",
          "ends_at": "2024-06-30T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T16:00:00Z",
          "ends_at": "2024-06-30T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T16:00:00Z",
          "ends_at": "2024-06-30T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T17:00:00Z",
          "ends_at": "2024-06-30T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T18:00:00Z",
          "ends_at": "2024-06-30T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T18:00:00Z",
          "ends_at": "2024-06-30T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T18:00:00Z",
          "ends_at": "2024-06-30T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "de7e7cfb-4221-27a2-6e65-3e9c4de7e118",
          "starts_at": "2024-06-30T18:00:00Z",
          "ends_at": "2024-06-30T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T16:00:00Z",
          "ends_at": "2024-07-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T17:00:00Z",
          "ends_at": "2024-07-03T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T18:00:00Z",
          "ends_at": "2024-07-03T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T18:00:00Z",
          "ends_at": "2024-07-03T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T18:00:00Z",
          "ends_at": "2024-07-03T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-03T18:00:00Z",
          "ends_at": "2024-07-03T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T16:00:00Z",
          "ends_at": "2024-07-04T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T17:00:00Z",
          "ends_at": "2024-07-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T18:00:00Z",
          "ends_at": "2024-07-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T18:00:00Z",
          "ends_at": "2024-07-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T18:00:00Z",
          "ends_at": "2024-07-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-04T18:00:00Z",
          "ends_at": "2024-07-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T16:00:00Z",
          "ends_at": "2024-07-05T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T16:00:00Z",
          "ends_at": "2024-07-05T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T16:00:00Z",
          "ends_at": "2024-07-05T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T16:00:00Z",
          "ends_at": "2024-07-05T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T17:00:00Z",
          "ends_at": "2024-07-05T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T18:00:00Z",
          "ends_at": "2024-07-05T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T19:00:00Z",
          "ends_at": "2024-07-05T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T19:00:00Z",
          "ends_at": "2024-07-05T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T19:00:00Z",
          "ends_at": "2024-07-05T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "85c0ed24-49ff-a2fa-945b-07894d66166e",
          "starts_at": "2024-07-05T19:00:00Z",
          "ends_at": "2024-07-05T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T16:00:00Z",
          "ends_at": "2024-07-06T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T17:00:00Z",
          "ends_at": "2024-07-06T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T18:00:00Z",
          "ends_at": "2024-07-06T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T19:00:00Z",
          "ends_at": "2024-07-06T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T20:00:00Z",
          "ends_at": "2024-07-06T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-06T20:00:00Z",
          "ends_at": "2024-07-06T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T16:00:00Z",
          "ends_at": "2024-07-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T16:00:00Z",
          "ends_at": "2024-07-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T16:00:00Z",
          "ends_at": "2024-07-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T16:00:00Z",
          "ends_at": "2024-07-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T17:00:00Z",
          "ends_at": "2024-07-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T18:00:00Z",
          "ends_at": "2024-07-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T18:00:00Z",
          "ends_at": "2024-07-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T18:00:00Z",
          "ends_at": "2024-07-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "827d77b0-4a67-62b8-e6c1-bf8f35ae8e75",
          "starts_at": "2024-07-07T18:00:00Z",
          "ends_at": "2024-07-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T16:00:00Z",
          "ends_at": "2024-07-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T17:00:00Z",
          "ends_at": "2024-07-10T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-10T18:00:00Z",
          "ends_at": "2024-07-10T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T16:00:00Z",
          "ends_at": "2024-07-11T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T17:00:00Z",
          "ends_at": "2024-07-11T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-11T18:00:00Z",
          "ends_at": "2024-07-11T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T16:00:00Z",
          "ends_at": "2024-07-12T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T17:00:00Z",
          "ends_at": "2024-07-12T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T18:00:00Z",
          "ends_at": "2024-07-12T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "f7b5e0fd-49c3-0b09-ef46-c1a82a80ed3d",
          "starts_at": "2024-07-12T19:00:00Z",
          "ends_at": "2024-07-12T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T16:00:00Z",
          "ends_at": "2024-07-13T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T17:00:00Z",
          "ends_at": "2024-07-13T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T18:00:00Z",
          "ends_at": "2024-07-13T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T19:00:00Z",
          "ends_at": "2024-07-13T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T20:00:00Z",
          "ends_at": "2024-07-13T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-13T20:00:00Z",
          "ends_at": "2024-07-13T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T16:00:00Z",
          "ends_at": "2024-07-14T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T16:00:00Z",
          "ends_at": "2024-07-14T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T16:00:00Z",
          "ends_at": "2024-07-14T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T16:00:00Z",
          "ends_at": "2024-07-14T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T17:00:00Z",
          "ends_at": "2024-07-14T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T18:00:00Z",
          "ends_at": "2024-07-14T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T18:00:00Z",
          "ends_at": "2024-07-14T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T18:00:00Z",
          "ends_at": "2024-07-14T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "6bc7b2b7-46d8-81a7-e344-03a5d4912473",
          "starts_at": "2024-07-14T18:00:00Z",
          "ends_at": "2024-07-14T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T16:00:00Z",
          "ends_at": "2024-07-17T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T17:00:00Z",
          "ends_at": "2024-07-17T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-17T18:00:00Z",
          "ends_at": "2024-07-17T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T16:00:00Z",
          "ends_at": "2024-07-18T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T17:00:00Z",
          "ends_at": "2024-07-18T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-18T18:00:00Z",
          "ends_at": "2024-07-18T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T16:00:00Z",
          "ends_at": "2024-07-19T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T17:00:00Z",
          "ends_at": "2024-07-19T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T18:00:00Z",
          "ends_at": "2024-07-19T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "0804f6db-4cdb-ff4d-4cf4-398c114f15cf",
          "starts_at": "2024-07-19T19:00:00Z",
          "ends_at": "2024-07-19T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T16:00:00Z",
          "ends_at": "2024-07-20T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T17:00:00Z",
          "ends_at": "2024-07-20T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T18:00:00Z",
          "ends_at": "2024-07-20T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T19:00:00Z",
          "ends_at": "2024-07-20T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T20:00:00Z",
          "ends_at": "2024-07-20T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-20T20:00:00Z",
          "ends_at": "2024-07-20T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T16:00:00Z",
          "ends_at": "2024-07-21T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T16:00:00Z",
          "ends_at": "2024-07-21T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T16:00:00Z",
          "ends_at": "2024-07-21T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T16:00:00Z",
          "ends_at": "2024-07-21T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T17:00:00Z",
          "ends_at": "2024-07-21T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T18:00:00Z",
          "ends_at": "2024-07-21T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T18:00:00Z",
          "ends_at": "2024-07-21T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T18:00:00Z",
          "ends_at": "2024-07-21T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "013287d5-4dd8-eff7-00b0-e9b676595fb1",
          "starts_at": "2024-07-21T18:00:00Z",
          "ends_at": "2024-07-21T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T16:00:00Z",
          "ends_at": "2024-07-24T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T17:00:00Z",
          "ends_at": "2024-07-24T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-24T18:00:00Z",
          "ends_at": "2024-07-24T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T16:00:00Z",
          "ends_at": "2024-07-25T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T17:00:00Z",
          "ends_at": "2024-07-25T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-25T18:00:00Z",
          "ends_at": "2024-07-25T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T16:00:00Z",
          "ends_at": "2024-07-26T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T17:00:00Z",
          "ends_at": "2024-07-26T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T18:00:00Z",
          "ends_at": "2024-07-26T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "8e5fb3d0-4035-0fe1-9fe8-3b974080cf93",
          "starts_at": "2024-07-26T19:00:00Z",
          "ends_at": "2024-07-26T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T16:00:00Z",
          "ends_at": "2024-07-27T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T17:00:00Z",
          "ends_at": "2024-07-27T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T18:00:00Z",
          "ends_at": "2024-07-27T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T19:00:00Z",
          "ends_at": "2024-07-27T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T20:00:00Z",
          "ends_at": "2024-07-27T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-27T20:00:00Z",
          "ends_at": "2024-07-27T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T16:00:00Z",
          "ends_at": "2024-07-28T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T16:00:00Z",
          "ends_at": "2024-07-28T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T16:00:00Z",
          "ends_at": "2024-07-28T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T16:00:00Z",
          "ends_at": "2024-07-28T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T17:00:00Z",
          "ends_at": "2024-07-28T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T18:00:00Z",
          "ends_at": "2024-07-28T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T18:00:00Z",
          "ends_at": "2024-07-28T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T18:00:00Z",
          "ends_at": "2024-07-28T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "96cf84f8-47a9-283c-ab74-78abf8c1bf9e",
          "starts_at": "2024-07-28T18:00:00Z",
          "ends_at": "2024-07-28T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T16:00:00Z",
          "ends_at": "2024-07-31T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T17:00:00Z",
          "ends_at": "2024-07-31T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-07-31T18:00:00Z",
          "ends_at": "2024-07-31T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T16:00:00Z",
          "ends_at": "2024-08-01T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T17:00:00Z",
          "ends_at": "2024-08-01T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-01T18:00:00Z",
          "ends_at": "2024-08-01T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T16:00:00Z",
          "ends_at": "2024-08-02T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T17:00:00Z",
          "ends_at": "2024-08-02T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T18:00:00Z",
          "ends_at": "2024-08-02T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "58d4e42c-46b8-f6ff-fc72-58abeb658bb0",
          "starts_at": "2024-08-02T19:00:00Z",
          "ends_at": "2024-08-02T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T16:00:00Z",
          "ends_at": "2024-08-03T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T17:00:00Z",
          "ends_at": "2024-08-03T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T18:00:00Z",
          "ends_at": "2024-08-03T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T19:00:00Z",
          "ends_at": "2024-08-03T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T20:00:00Z",
          "ends_at": "2024-08-03T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-03T20:00:00Z",
          "ends_at": "2024-08-03T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T16:00:00Z",
          "ends_at": "2024-08-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T16:00:00Z",
          "ends_at": "2024-08-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T16:00:00Z",
          "ends_at": "2024-08-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T16:00:00Z",
          "ends_at": "2024-08-04T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T17:00:00Z",
          "ends_at": "2024-08-04T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T18:00:00Z",
          "ends_at": "2024-08-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T18:00:00Z",
          "ends_at": "2024-08-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T18:00:00Z",
          "ends_at": "2024-08-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "a4e1eded-4691-fefb-5c30-83b05740645d",
          "starts_at": "2024-08-04T18:00:00Z",
          "ends_at": "2024-08-04T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T16:00:00Z",
          "ends_at": "2024-08-07T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T17:00:00Z",
          "ends_at": "2024-08-07T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-07T18:00:00Z",
          "ends_at": "2024-08-07T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T16:00:00Z",
          "ends_at": "2024-08-08T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T17:00:00Z",
          "ends_at": "2024-08-08T18:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-08T18:00:00Z",
          "ends_at": "2024-08-08T19:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T16:00:00Z",
          "ends_at": "2024-08-09T17:00:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T17:00:00Z",
          "ends_at": "2024-08-09T18:00:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T18:00:00Z",
          "ends_at": "2024-08-09T19:00:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "9d08d907-407a-2125-5aa7-ab80d3807745",
          "starts_at": "2024-08-09T19:00:00Z",
          "ends_at": "2024-08-09T20:00:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T17:00:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T16:00:00Z",
          "ends_at": "2024-08-10T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T18:00:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T17:00:00Z",
          "ends_at": "2024-08-10T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T19:00:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T18:00:00Z",
          "ends_at": "2024-08-10T18:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T20:00:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T19:00:00Z",
          "ends_at": "2024-08-10T19:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T20:00:00Z",
          "ends_at": "2024-08-10T20:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "135b5c3b-478f-96de-ca3e-2f9ccc75d740",
          "starts_at": "2024-08-10T20:00:00Z",
          "ends_at": "2024-08-10T20:15:00Z",
          "conference": "EU_NORTH_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_TURKEY_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T16:00:00Z",
          "ends_at": "2024-08-11T16:15:00Z",
          "conference": "EU_MIDDLE_EAST_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_DACH_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_IBIT_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_FRANCE_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T17:00:00Z",
          "ends_at": "2024-08-11T17:15:00Z",
          "conference": "EU_EAST_SUPER"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH"
        },
        {
          "event_id": "529ca58d-4603-108b-5771-72ab345d1847",
          "starts_at": "2024-08-11T18:00:00Z",
          "ends_at": "2024-08-11T18:15:00Z",
          "conference": "EU_NORTH_SUPER"
        }
      ]
    }
  ]
}`) as unknown,
);
