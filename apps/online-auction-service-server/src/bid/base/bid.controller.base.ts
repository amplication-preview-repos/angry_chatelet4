/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BidService } from "../bid.service";
import { BidCreateInput } from "./BidCreateInput";
import { Bid } from "./Bid";
import { BidFindManyArgs } from "./BidFindManyArgs";
import { BidWhereUniqueInput } from "./BidWhereUniqueInput";
import { BidUpdateInput } from "./BidUpdateInput";

export class BidControllerBase {
  constructor(protected readonly service: BidService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bid })
  async createBid(@common.Body() data: BidCreateInput): Promise<Bid> {
    return await this.service.createBid({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bid] })
  @ApiNestedQuery(BidFindManyArgs)
  async bids(@common.Req() request: Request): Promise<Bid[]> {
    const args = plainToClass(BidFindManyArgs, request.query);
    return this.service.bids({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bid })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bid(@common.Param() params: BidWhereUniqueInput): Promise<Bid | null> {
    const result = await this.service.bid({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bid })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBid(
    @common.Param() params: BidWhereUniqueInput,
    @common.Body() data: BidUpdateInput
  ): Promise<Bid | null> {
    try {
      return await this.service.updateBid({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bid })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBid(
    @common.Param() params: BidWhereUniqueInput
  ): Promise<Bid | null> {
    try {
      return await this.service.deleteBid({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
