# Example Usage of the Translation Scripts

## Example 1: Copy a translated file for the Appointment Booking Flow

```powershell
.\scripts\copy-translation.ps1 -SourceFile "D:\path\to\translated\4.2_Appointment_Booking_Flow_ES.md" -TargetSection "design" -TargetSubsection "user-flows" -TargetFilename "4.2_Appointment_Booking_Flow.md"
```

## Example 2: Copy a translated file for Wireframes

```powershell
.\scripts\copy-translation.ps1 -SourceFile "D:\path\to\translated\4.3_Wireframes_ES.md" -TargetSection "design" -TargetSubsection "ui-design" -TargetFilename "4.3_Wireframes.md"
```

## Example 3: Copy a translated file for UI Components

```powershell
.\scripts\copy-translation.ps1 -SourceFile "D:\path\to\translated\4.4_UI_Components_ES.md" -TargetSection "design" -TargetSubsection "ui-design" -TargetFilename "4.4_UI_Components.md"
```

## Example 4: Copy a translated file for Design System

```powershell
.\scripts\copy-translation.ps1 -SourceFile "D:\path\to\translated\4.5_Design_System_ES.md" -TargetSection "design" -TargetSubsection "ui-design" -TargetFilename "4.5_Design_System.md"
```

## Example 5: Copy a translated file for Test Plans

```powershell
.\scripts\copy-translation.ps1 -SourceFile "D:\path\to\translated\5.1_Test_Plans_ES.md" -TargetSection "testing" -TargetFilename "5.1_Test_Plans.md"
```

## Starting the Development Server

To test your translations, simply run:

```
.\scripts\start-dev-server.bat
```

Then navigate to http://localhost:3000 and switch to Spanish using the language dropdown in the top right corner.
