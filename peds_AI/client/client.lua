local display = false
local pedatual

 

RegisterNUICallback("sair", function()
    SetDisplay(false)
    ClearPedTasks(pedatual)
    --TaskWanderStandard(pedatual, 10.0, 10)
    pedatual = nil
end)

RegisterNUICallback("falar", function(e)
    BeginTextCommandPrint("STRING")
    AddTextComponentSubstringPlayerName(e.texto)
    EndTextCommandPrint(4000, 1)
end)

RegisterNUICallback("recrutar", function(e)

    BeginTextCommandPrint("STRING")
    AddTextComponentSubstringPlayerName('Opa, claro, vamos nessa!!')
    EndTextCommandPrint(4000, 1)
    -- pedatual
    local my_group = GetPlayerGroup(PlayerPedId())
    SetPedAsGroupLeader(PlayerPedId(), my_group)
    SetPedAsGroupMember(pedatual, my_group)
    SetPedNeverLeavesGroup(pedatual, my_group)
    SetPedRelationshipGroupHash(pedatual, 'PLAYER')
    ClearPedTasks(pedatual)


    SetDisplay(false)
    pedatual = nil
end)

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    -- envia infos pro html
    local horarioAtual = GetClockHours()
    -- Envia a chamada pro html enviando a hora
    SendNUIMessage({
        type = "ui",
        status = bool,
        modeloPed = ''
    })
end

function DrawText3D(text, x, y, z)
    local onScreen, _x, _y = World3dToScreen2d(x, y, z)

    SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(text)
    DrawText(_x, _y)

end

function lerPeds()

    


    if IsPedOnFoot(PlayerPedId())  and not DoesEntityExist(pedatual) then

        if DoesEntityExist(pedatual) then
            TaskLookAtEntity(pedatual , PlayerPedId(), -1,2048, 3)
            TaskGoToEntity(pedatual, PlayerPedId(), -1, 2.0, 2.0, 1073741824, 0)
        end

        local peds = GetGamePool("CPed")
        for _, z in pairs(peds) do

            if PlayerPedId() ~= z then
                local cord = GetOffsetFromEntityInWorldCoords(z, 0.0, 0.0, 0.0)

                if IsEntityAtCoord(PlayerPedId(), cord.x, cord.y, cord.z, 1.0, 1.0, 1.0, 0, 1, 0) then

                    DrawText3D('Aperte [E] para conversar', cord.x, cord.y, cord.z)
                    if IsEntityAtCoord(PlayerPedId(), cord.x, cord.y, cord.z, 1.0, 1.0, 1.0, 0, 1, 0) then
                        if IsControlJustPressed(0, 38) then

                            TaskLookAtEntity(z , PlayerPedId(), -1,2048, 3)

                            TaskGoToEntity(z, PlayerPedId(), -1, 2.0, 2.0, 1073741824, 0)

                            display = true
                            SetNuiFocus(true, true)
                            -- envia infos pro html
                            local _modeloPed = GetEntityArchetypeName(z)

                            pedatual = z
                            -- Envia a chamada pro html enviando a hora
                            SendNUIMessage({
                                type = "ui",
                                status = true,
                                modeloPed = _modeloPed
                            })

                        end
                    end
                end

            end
        end

    end

end

Citizen.CreateThread(function()
    while display do

        Citizen.Wait(5)
        DisableControlAction(0, 1, display)
        DisableControlAction(0, 2, display)
        DisableControlAction(0, 142, display)
        DisableControlAction(0, 18, display)
        DisableControlAction(0, 322, display)
        DisableControlAction(0, 106, display)
    end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(5)
        lerPeds()
    end
end)
