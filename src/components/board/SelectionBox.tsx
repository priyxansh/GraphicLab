"use client";

import { memo } from "react";
import { useSelf, useStorage } from "../../../liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { UseSelectionBounds } from "@/hooks/UseSelectionBounds";

interface SelectionBoxProps {
  onResizeHandlePointerDown: () => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isShowingHandles = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
    );

    const bounds = UseSelectionBounds();

    if (!bounds) {
      return null;
    }

    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
          style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
        />
        {isShowingHandles && (
          <>
            <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "ns-resize",
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "nesw-resize",
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "ew-resize",
                transform: `translate(${bounds.x + bounds.width  - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "nwse-resize",
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
                width :`${HANDLE_WIDTH}px`,
                height:`${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }} />

              <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "ns-resize",
                transform: `translate(${bounds.x + bounds.width /2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
                width :`${HANDLE_WIDTH}px`,
                height:`${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }} />

              <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "nesw-resize",
                transform: `translate(${bounds.x  - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px)`,
                width :`${HANDLE_WIDTH}px`,
                height:`${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }} />

              <rect
              className="stroke-blue-500 fill-white stroke-1"
              style={{
                cursor: "ew-resize",
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2}px)`,
                width :`${HANDLE_WIDTH}px`,
                height:`${HANDLE_WIDTH}px`,
              }}
              x={0}
              y={0}
              onPointerDown={(e) => {
                e.stopPropagation();
              }} />
          </>
        )}
      </>
    );
  }
);

SelectionBox.displayName = "SelectionBox";
